import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { DateWithTimeZonePipe } from 'pipes/dateWithTimeZone/dateWithTimeZone.pipe';
import { DefaultPipe } from 'pipes/default/default.pipe';

interface ValuesToReplace {
    toReplace: string;
    expression: string;
}

interface Replacement {
    toReplace: string;
    replacement: string;
}

interface ParsedPipe {
    pipeName: string;
    args: any[];
}

interface ParsedExpression {
    variableName: string;
    pipes: ParsedPipe[];
}

export type TemplateTransformer = (template: { [key: string]: any }) => string;

@Injectable()
export class CmsReplacementService {

    constructor(
        private currency: CurrencyPipe,
        private dateWithTimeZone: DateWithTimeZonePipe,
        private Default: DefaultPipe
    ) { }


    public transformTemplate(template: string, data: { [key: string]: any }) {        
        return this.getTemplateTransformer(template)(data);
    };

    public getTemplateTransformer(template: string): TemplateTransformer {

        const replacementRecipe = this.findAllToReplace(template)
            .map(({ toReplace, expression }) => ({
                toReplace,
                parsedExpression: this.parseExpression(expression)
            }));            

        //as much parsing as possible done
        return (data) => replacementRecipe
            .map(({ toReplace, parsedExpression}) => ({
                toReplace,
                replacement: this.computeReplacement(parsedExpression, data || {})
            }))
            .reduce(this.replaceInTemplate, template);
    }

    private computeReplacement = ({ variableName, pipes }: ParsedExpression, data) => {

        const applyPipeToValue = (value, { pipeName, args }: ParsedPipe) => this[pipeName].transform(value, ...args);

        return pipes.reduce(applyPipeToValue, data[variableName]);
    };

    private replaceInTemplate = (template: string, { toReplace, replacement }: Replacement) => template.replace(toReplace, replacement);
    
    private findAllToReplace = (template: string): ValuesToReplace[] => 
        /*replaceCurlyBraces?*/

         ((template || '').match(/\[\[([\w|:',\s]+)\]\]/g) || [])
            .map(toReplace => toReplace.match(/\[\[([\w|:',\s]+)\]\]/))
            .map(([toReplace, expression]) => ({ toReplace, expression }))
            .filter(({ expression }) => expression.trim());
    

    private parseExpression = (expression: string): ParsedExpression => {
        const [variable, ...pipes] = expression.split('|');

        const replacement = pipes
            .map(this.parsePipe);

        return {
            pipes: pipes.map(this.parsePipe),
            variableName: variable.trim()
        };
    };

    private parsePipe = (pipeString: string): ParsedPipe => {

        const [pipeName, ...rest] = pipeString.split(':');

        const argsString = rest.join(':');

        return {
            pipeName: pipeName.trim(),
            args: argsString
                ? JSON.parse(`[${argsString.replace(/'/g, '"')}]`)
                : []
        };
    };
}
