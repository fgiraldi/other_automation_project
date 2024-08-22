export const fulfillmentEventsReportPage = {
    url: '/reports/fulfillment-events',
    'Export Button': 'a[href^="/reports/"][href*="format="]',
    'Search Input': 'input#fulfillment_id',
    'Search Button': 'input[type="submit"][name="commit"][value="Search"]',
    'Results Count Dropdown': '#select2-results',

    // table
    'Fulfillment Events Table': '//table',
    'Fulfillment ID Column': 'a[href^="/fulfillments/"]',
    'Created At Column': '//div[@class="table-responsive"]//tbody//tr//td[5]',
    'Updated At Column': '//div[@class="table-responsive"]//tbody//tr//td[6]',
    HardDisconnection: '//td[contains(text(), "Event::HardDisconnection")]',
    AutoSubmit: '//td[contains(text(), "Event::AutoSubmit")]',
    TouchPoint: '//td[contains(text(), "Event::TouchPoint")]',
    TestTakerDisconnected:
        '//td[contains(text(), "Event::TestTakerDisconnected")]',
    BrowserTab: '//td[contains(text(), "Event::BrowserTab")]',
    GazeOffScreen: '//td[contains(text(), "Event::GazeOffScreen")]',
    CpuAndRamLoad: '//td[contains(text(), "Event::CpuAndRamLoad")]',
    SessionVerified: '//td[contains(text(), "Event::SessionVerified")]',
    LaunchExamClicked: '//td[contains(text(), "Event::LaunchExamClicked")]',
    ReservationCancelled:
        '//td[contains(text(), "Event::ReservationCancelled")]',
    FlightPath: '//td[contains(text(), "Event::FlightPath")]',
    SessionAwaitingVerification:
        '//td[contains(text(), "Event::SessionAwaitingVerification")]',
    LmiDownload: '//td[contains(text(), "Event::LmiDownload")]',
    VerificationDownload:
        '//td[contains(text(), "Event::VerificationDownload")]',
    ExamRulesAgreement: '//td[contains(text(), "Event::ExamRulesAgreement")]',
    ExamRulesAcknowledge:
        '//td[contains(text(), "Event::ExamRulesAcknowledge")]',
    VerificationEmbedded:
        '//td[contains(text(), "Event::VerificationEmbedded")]',
    AcceptedTerms: '//td[contains(text(), "Event::AcceptedTerms")]',
    AcceptedRules: '//td[contains(text(), "Event::AcceptedRules")]',
    ExamAssistance: '//td[contains(text(), "Event::ExamAssistance")]',
    ExamRules: '//td[contains(text(), "Event::ExamRulesAgreement")]',
    IdConfirmation: '//td[contains(text(), "Event::IdConfirmation")]',
    TakeFacePhoto: '//td[contains(text(), "Event::TakeFacePhoto")]',
    PictureConfirmation: '//td[contains(text(), "Event::PictureConfirmation")]',
    VolumeCheckSkipped: '//td[contains(text(), "Event::VolumeCheckSkipped")]',
    LightCheckSkipped: '//td[contains(text(), "Event::LightCheckSkipped")]',
    SystemCheck: '//td[contains(text(), "Event::SystemCheck")]',
    TestTakerConnected: '//td[contains(text(), "Event::TestTakerConnected")]',
    ScreenShareStart: '//td[contains(text(), "Event::ScreenShareStart")]',
    ExamRulesSpace: '//td[contains(text(), "Event::ExamRulesSpace")]',
    FulfillmentStarted: '//td[contains(text(), "Event::FulfillmentStarted")]',
    RecordingStart: '//td[contains(text(), "Event::RecordingStart")]',
    SystemChecks: '//td[contains(text(), "Event::SystemChecks")]',
    AcceptedStatements: '//td[contains(text(), "Event::AcceptedStatements")]',
    AcceptedRecordingAndKeystroke:
        '//td[contains(text(), "Event::AcceptedRecordingAndKeystroke")]',
    SystemMetricsLog: '//td[contains(text(), "Event::SystemMetricsLog")]',
    ExamRulesRecording: '//td[contains(text(), "Event::ExamRulesRecording")]',
    UploadSpeedLog: '//td[contains(text(), "Event::UploadSpeedLog")]',
    DownloadSpeedLog: '//td[contains(text(), "Event::DownloadSpeedLog")]',
    MemoryUsageLog: '//td[contains(text(), "Event::MemoryUsageLog")]',
    MemoryInformationLog:
        '//td[contains(text(), "Event::MemoryInformationLog")]',
    CpuUsageLog: '//td[contains(text(), "Event::CpuUsageLog")]',
    CpuInformationLog: '//td[contains(text(), "Event::CpuInformationLog")]',
    DisplayInformationLog:
        '//td[contains(text(), "Event::DisplayInformationLog")]',
    ExamRulesDisagreement:
        '//td[contains(text(), "Event::ExamRulesDisagreement")]',
    ExtensionVersionLog: '//td[contains(text(), "Event::ExtensionVersionLog")]',
    ExamRulesId: '//td[contains(text(), "Event::ExamRulesId")]',
    BrowserInformationLog:
        '//td[contains(text(), "Event::BrowserInformationLog")]',
    OperatingSystemLog: '//td[contains(text(), "Event::OperatingSystemLog")]',
    GetHelp: '//td[contains(text(), "Event::GetHelp")]',
    SystemInformation: '//td[contains(text(), "Event::SystemInformation")]',
    Welcome: '//td[contains(text(), "Event::Welcome")]',
    ExamStart: '//td[contains(text(), "Event::ExamStart")]',
    LivePlusRecordingMethod:
        '//td[contains(text(), "Event::LivePlusRecordingMethod")]',
    FulfillmentScheduled:
        '//td[contains(text(), "Event::FulfillmentScheduled")]',
    WebhookSuccess: '//td[contains(text(), "Event::WebhookSuccess")]',
    RecordingNotice: '//td[contains(text(), "Event::RecordingNotice")]',
    RecordedAgreement: '//td[contains(text(), "Event::RecordedAgreement")]',
    RecordingNoticeAgreement:
        '//td[contains(text(), "Event::RecordingNoticeAgreement")]',
    LmiAppletLaunched: '//td[contains(text(), "Event::LmiAppletLaunched")]',
    IdCaptured: '//td[contains(text(), "Event::ScreenShared")]',
    IdentityVerification:
        '//td[contains(text(), "Event::IdentityVerification")]',
    ShareScreen: '//td[contains(text(), "Event::ShareScreen")]',
    ScreenShared: '//td[contains(text(), "Event::ScreenShareStart")]',
    CameraAndMicrophoneShared:
        '//td[contains(text(), "Event::CameraAndMicrophoneShared")]',
    TermsOfService: '//td[contains(text(), "Event::TermsOfService")]',
    WaitingScreen: '//td[contains(text(), "Event::WaitingScreen")]',
    AppointmentIDField:
        '#navbar-collapse > form > div.form-group.has-feedback > input',
};
