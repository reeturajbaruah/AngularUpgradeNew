import { SiteCoreItem } from 'cms/cms.module';

export interface SecurityQuestionCMS extends SiteCoreItem {
    Btn_Text: string;
    Success_Msg_Text: string;
    Multi_Factor_Authentication_Title_Text: string;
    Input_Pattern_Msg: string;
    Input_Required_Msg: string;
    Input_Lable_Text: string;
}