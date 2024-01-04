const tsc2_9_2 = require('ts2_9_2');

//https://github.com/microsoft/TypeScript/wiki/Using-the-Compiler-API
module.exports = function compile(options){
  
  function logDiagnostic(diagnostic) {
    if (diagnostic.file) {
      const data = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
      const line = data.line;
      const character = data.character;
      let message = tsc2_9_2.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
      console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
    } else {
      console.log(tsc2_9_2.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
    }
  }
  
  if (options.watch) {

    const host = tsc2_9_2.createWatchCompilerHost(
      options.files,
      options.tsConfigJson,
      tsc2_9_2.sys,
      tsc2_9_2.createEmitAndSemanticDiagnosticsBuilderProgram,
      logDiagnostic,
      logDiagnostic
    );

    tsc2_9_2.createWatchProgram(host);

  } else {
    
    let program = tsc2_9_2.createProgram(options.files, options.tsConfigJson);
    let emitResult = program.emit();

    tsc2_9_2
      .getPreEmitDiagnostics(program)
      .concat(emitResult.diagnostics)
      .forEach(diagnostic => {
        logDiagnostic(diagnostic);
      });

  }

  

}