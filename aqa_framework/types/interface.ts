export interface elementActionParameters {
    elementName: string;
    siteName?: string;
    pageName?: string;
    method?: string;
    every?: boolean;
    text?: string;
    inputType?: string;
    optionText?: string;
    selector?: string;
    elemArr?: string;
    attribute?: string;
    value?: string;
    condition?: string;
    offset?: string;
}

export interface user {
    name?: string;
    email?: string;
    password?: string;
    env?: ('staging' | 'asdf')[];
    id?: string;
}

export interface Case_Result {
    case_id: number;
    assignedto_id?: number;
    comment: string;
    scenarios: string;
    status_id: number;
    failed_at_step?: string;
}

export interface Step_Result {
    arguments: string[];
    keyword: string;
    name: string;
    result: {
        status: string;
        duration: number;
        error_message?: string;
    };
    line: string;
    match: {
        location: string;
    };
}

export interface Scenario_Result {
    keyword: string;
    description: string;
    name: string;
    tags: {
        name: string;
        location: { line: number; column: number };
    }[];
    id: string;
    steps: Step_Result[];
    result?: {
        status: string;
        failed_at_step?: string;
        error_message?: string;
    };
}

export interface Feature_Result {
    keyword: string;
    description: string;
    line: number;
    name: string;
    uri: string;
    tags: [];
    elements: Scenario_Result[];
    id: string;
    metadata: {
        browser: { name: string; version: string };
        device: string;
        platform: { name: string; version: string };
    };
}
