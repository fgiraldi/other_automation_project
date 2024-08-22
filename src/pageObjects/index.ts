import { LoginPage } from './archimedes/login.page';
import { AllUsersView } from './archimedes/Users/allUsers.page';
import { StudentReservationPage } from './archimedes/studentReservation.page';
import { StudentSelectExamPage } from './archimedes/studentSelectExam.page';
import { StudentScheduleSessionPage } from './archimedes/studentScheduleSession.page';
import { StudentReceiptPage } from './archimedes/studentReceipt.page';
import { StudentOrder } from './archimedes/studentOrder.page';
import { PrechecksPage } from './archimedes/prechecksLivePlus.page';
import { AllInstitutionsView } from './archimedes/Institutions/allInstitutions.page';
import { NewInstitutionsView } from './archimedes/Institutions/newInstitution.page';
import { NewUserPage } from './archimedes/Users/newUser.page';
import { NewTestTakerAccountRegistration } from './archimedes/newTestTakerAccountRegistration.page';
import { NewInstructorUserAccountRegistration } from './archimedes/newInstructorAccountRegistration.page';
import { SendUnlockInstructionsPage } from './archimedes/sendUnlockInstructions.page';
import { CommonMoodlePage } from './lms/Moodle/commonMoodle.page';
import { BrightSpacePage } from './lms/Brightspace/brightspace.page';
import { CanvasPage } from './lms/Canvas/canvas.page';
import { InstructorHomePage } from './archimedes/instructorHome.page';
import { CommonMoodleRoomsPage } from './lms/MoodleRooms/commonMoodleRooms.page';
import { AllSessionsPage } from './archimedes/Sessions/allSessions.page';
import { AllExamsPage } from './archimedes/Exams/allExams.page';
import { ExamSummaryPage } from './archimedes/Exams/examSummary.page';
import { EditExamPage } from './archimedes/Exams/editExam.page';
import { SessionReservationPage } from './archimedes/Sessions/sessionReservation.page';
import { IncidentsPage } from './archimedes/Sessions/incidents.page';
import { FulfillmentPage } from './archimedes/Sessions/fulfillment.page';
import { TermsAndConditionsPage } from './archimedes/termsAndConditions.page';
import { EUCitizenConfirmationPage } from './archimedes/EUCitizenConfirmation.page';
import { AccountSettingsPage } from './archimedes/accountSettings.page';
import { ProctorUWidget } from './sharedObjects/widget';
import { ProctorUSurvey } from './sharedObjects/survey';
import { PearsonCommonPage } from './lms/Pearson/pearsonCommon.page';
import { ProctorUSettings } from './sharedObjects/proctoruSettings';
import { Utilities_GlobalSettingsPage } from './archimedes/Utilities/globalSettings.page';
import { NavigationHeader } from './archimedes/navigation.header';
import { UserProfilePage } from './archimedes/Users/userProfile.page';
import { UserSummaryPage } from './archimedes/Users/userSummary.page';
import { EditUserPage } from './archimedes/Users/editUser.page';
import {
    EditInstitutionPage,
    InstitutionPaymentMethodsView,
} from './archimedes/Institutions/editInstitution.page';
import { ExtensionsPage } from './extension/extensions.page';
import { ExtensionPopup } from './sharedObjects/extensionPopup';
import { ExtensionMenu } from './extension/ExtensionMenu.page';
import { LMIchat } from './sharedObjects/lmichat';
import { UtilityTab } from './sharedObjects/utilityTab';
import { reportsHomePage } from './archimedes/reportsHome.page';
import { sessionActivityReportPage } from './archimedes/reports/sessionActivity.page';
import { newExamsReportPage } from './archimedes/reports/newExamsReport.page';
import { activeExamsReportPage } from './archimedes/reports/activeExamsReport.page';
import { bluebirdReportPage } from './archimedes/reports/bluebirdReport.page';
import { inactiveExamsReportPage } from './archimedes/reports/inactiveExamsReport.page';
import { examsEndingReportPage } from './archimedes/reports/examsEndingReport.page';
import { fulfillmentEventsReportPage } from './archimedes/reports/fulFillmentEventsReport.page';
import { instructorIterationsReportPage } from './archimedes/reports/instructorIterationsReport.page';
import { touchpointReportPage } from './archimedes/reports/touchpointReport.page';
import { billingSummaryReportPage } from './archimedes/reports/billingSummaryReport.page';
import { billingReportPage } from './archimedes/reports/billingReport.page';
import { creditOnAccountReportPage } from './archimedes/reports/creditOnAccountReport.page';
import { pricingModificationReportPage } from './archimedes/reports/pricingModificationReport.tage';
import { missingPermittedResourcesReportPage } from './archimedes/reports/missingPermittedResourcesReport.page';
import { cancellationsReportPage } from './archimedes/reports/cancellationsReport.page';
import { testTakerSurveysReportPage } from './archimedes/reports/testTakerSurveysReport.page';
import { ucardsReportPage } from './archimedes/reports/ucardsReport.page';
import { userRolesReportPage } from './archimedes/reports/userRolesReport.page';
import { webhookStatusesReportPage } from './archimedes/reports/webhookStatusesReport.page';
import { thirdPartyLogsReportPage } from './archimedes/reports/thirdPartyLogsReport.page';
import { apiHistoriesReportPage } from './archimedes/reports/apiHistoriesReport.page';
import { executiveDashboardReportPage } from './archimedes/reports/executiveDashboardStatsReport.page';
import { ipAddressesReportPage } from './archimedes/reports/ipAddressesReport.page';
import { triggersAndWebhooks } from './archimedes/Utilities/triggersAndWebhooks';
import { institutionPage } from './archimedes/Institutions/institution.page';
import { editDepartmentPage } from './archimedes/Institutions/editDepartment.page';
import { editTermPage } from './archimedes/Institutions/editTerm.page';
import { mainHeader } from './archimedes/mainHeader.page';
import { redesignedFulfillmentPage } from './archimedes/Sessions/redesigned.fulfillment.page';
import { flipperPage } from './archimedes/Utilities/flipperSettings';
import { InstitutionAdminRolesPage } from './archimedes/Utilities/institutionAdminRolesPage.page';
import { ResetPasswordPage } from './archimedes/resetPassword.page';
import { SessionConfirmationPage } from './archimedes/sessionConfirmation.page';
import { MyCartPage } from './archimedes/myCart.page';
import { CheckoutPage } from './archimedes/checkout.page';
import { SchedulePage } from './archimedes/schedulePage.page';
import { AccessCodesPage } from './archimedes/AccessCodes/accessCodes.page';
import { AdjustLedgersPage } from './archimedes/adjustLedgers.page';
import { CreateAccessCodesPage } from './archimedes/AccessCodes/createAccessCodes.page';
import { AccessCodeBatchesPage } from './archimedes/AccessCodes/accessCodeBatches.page';
import { AccessCodeBatchDetailsPage } from './archimedes/AccessCodes/accessCodeBatchDetails.page';
import { OrderDetailsAdminPage } from './archimedes/orderDetails.admin.page';
import { StudentMyOrdersPage } from './archimedes/studentMyOrdersPage.page';
import {
    AccessCodeShipmentsPage,
    ViewAcessCodeShipmentModal,
} from './archimedes/AccessCodes/accessCodeShipments.page';
import { CreateAccessCodeShipmentPage } from './archimedes/AccessCodes/createAccessCodeShipment.page';
import { LivePlusConversionReportPage } from './archimedes/reports/livePlusConverstionReport.page';
import { ActivityStatsReportPage } from './archimedes/reports/activityStatsReport.page';
import { BlackboardCommonPage } from './lms/Blackboard/blackboardCommon.page';
import { loginPageScantron } from './scantron/loginPageScantron';
import { namsCustomerPage } from './scantron/customerPages/namsCustomerPage';
import { nateCustomerPage } from './scantron/customerPages/nateCustomerPage';
import { naifaCustomerPage } from './scantron/customerPages/naifaCustomerPage';
import { sesCustomerPage } from './scantron/customerPages/sesCustomerPage';
import { CommonMoodle3xPage } from './lms/Moodle/commonMoodle3x.page';
import { ccsCustomerPage } from './scantron/customerPages/ccsCustomerPage';
import { oncbCustomerPage } from './scantron/customerPages/oncbCustomerPage';
import { rncbCustomerPage } from './scantron/customerPages/rncbCustomerPage';
import { rdlCustomerPage } from './scantron/customerPages/rdlCustomerPage';
import { PushUrlPage} from './archimedes/pushUrl.page';
import { TestItOutPage } from './archimedes/testItOut.page';

const SharedObjects = {
    'ProctorU Widget': ProctorUWidget,
    'Prechecks Page': PrechecksPage,
    'ProctorU Survey': ProctorUSurvey,
    'ProctorU Settings': ProctorUSettings,
    'Extensions Page': ExtensionsPage,
    'Extension Popup': ExtensionPopup,
    'Extension Menu': ExtensionMenu,
    'LMI Chat': LMIchat,
    'Utility Tab': UtilityTab,
};

export const Sites = {
    Archimedes: {
        url: process.env['AUTOQA_ARCHIMEDES_HOME'],
        Login: LoginPage,
        'Main Header': mainHeader,
        'All Users': AllUsersView,
        'Student Reservation': StudentReservationPage,
        'Student Select Exam': StudentSelectExamPage,
        'Student Schedule Session': StudentScheduleSessionPage,
        'Session Confirmation': SessionConfirmationPage,
        'My Cart': MyCartPage,
        Checkout: CheckoutPage,
        'Student Receipt Page': StudentReceiptPage,
        'All Institutions': AllInstitutionsView,
        'Create New Institution': NewInstitutionsView,
        Institution: institutionPage,
        'Edit Institution': EditInstitutionPage,
        'Institution Payment Methods': InstitutionPaymentMethodsView,
        'Edit Department': editDepartmentPage,
        'Edit Term': editTermPage,
        'Create New User': NewUserPage,
        'New Test Taker Registration': NewTestTakerAccountRegistration,
        'New Instructor Registration': NewInstructorUserAccountRegistration,
        'Send Unlock Instructions Page': SendUnlockInstructionsPage,
        'Edit User': EditUserPage,
        'User Summary': UserSummaryPage,
        'User Profile': UserProfilePage,
        'Instructor Home': InstructorHomePage,
        'All Sessions': AllSessionsPage,
        'All Exams': AllExamsPage,
        'Exam Summary': ExamSummaryPage,
        'Edit Exam': EditExamPage,
        'Session Reservation': SessionReservationPage,
        Incidents: IncidentsPage,
        Fulfillment: FulfillmentPage,
        'Redesigned Fulfillment': redesignedFulfillmentPage,
        'Terms and Conditions': TermsAndConditionsPage,
        'EU Citizen Confirmation': EUCitizenConfirmationPage,
        'Reset Password': ResetPasswordPage,
        'Account Settings': AccountSettingsPage,
        'Student Order': StudentOrder,
        'Global Settings': Utilities_GlobalSettingsPage,
        'Navigation Header': NavigationHeader,
        'Reports Home': reportsHomePage,
        'Session Activity Report': sessionActivityReportPage,
        'New Exams Report': newExamsReportPage,
        'Active Exams Report': activeExamsReportPage,
        'Bluebird Report': bluebirdReportPage,
        'Inactive Exams Report': inactiveExamsReportPage,
        'Exams Ending Report': examsEndingReportPage,
        'Fulfillment Events Report': fulfillmentEventsReportPage,
        'Instructor Iterations Report': instructorIterationsReportPage,
        'Touch Points Report': touchpointReportPage,
        'Billing Summary Report': billingSummaryReportPage,
        'Billing Report': billingReportPage,
        'Credit on Accounts Report': creditOnAccountReportPage,
        'Live+ Conversion Report': LivePlusConversionReportPage,
        'Pricing Modification Report': pricingModificationReportPage,
        'Missing Permitted Resources Report': missingPermittedResourcesReportPage,
        'Cancellations Report': cancellationsReportPage,
        'Test Taker Surveys Report': testTakerSurveysReportPage,
        'UCards Report': ucardsReportPage,
        'User Roles Report': userRolesReportPage,
        'Webhook Statuses Report': webhookStatusesReportPage,
        'Third Party Logs Report': thirdPartyLogsReportPage,
        'API Histories': apiHistoriesReportPage,
        'Executive Dashboard Stats Report': executiveDashboardReportPage,
        'Activity Stats Report': ActivityStatsReportPage,
        'IP Addresses Report': ipAddressesReportPage,
        'Access Codes': AccessCodesPage,
        'Create Access Codes': CreateAccessCodesPage,
        'Access Code Batches': AccessCodeBatchesPage,
        'Access Code Batch Details': AccessCodeBatchDetailsPage,
        'Access Code Shipments': AccessCodeShipmentsPage,
        'View Access Code Shipment Modal': ViewAcessCodeShipmentModal,
        'Create Access Code Shipment': CreateAccessCodeShipmentPage,
        'Order Details Admin': OrderDetailsAdminPage,
        'Adjust Ledgers': AdjustLedgersPage,
        Triggers: triggersAndWebhooks,
        Flipper: flipperPage,
        'Institution Admin Roles': InstitutionAdminRolesPage,
        'Schedule': SchedulePage,
        'Student My Orders': StudentMyOrdersPage,
        'Push Url': PushUrlPage,
        'Test It Out': TestItOutPage,

        ...SharedObjects,
    },
    Scantron: {
        url: process.env['AUTOQA_SCANTRON_HOME'],
        Login: loginPageScantron,
        NAMS: namsCustomerPage,
        NATE: nateCustomerPage,
        NAIFA: naifaCustomerPage,
        SES: sesCustomerPage,
        CCS: ccsCustomerPage,
        ONCB: oncbCustomerPage,
        RNCB: rncbCustomerPage,
        RDL: rdlCustomerPage,
        ...SharedObjects,
    },
    Moodle: {
        url: process.env['AUTOQA_MOODLE_HOME'],
        Common: CommonMoodlePage,
        ...SharedObjects,
    },
    Moodle_392: {
        url: process.env['AUTOQA_MOODLE_3.9.2_HOME'],
        Common: CommonMoodlePage,
        ...SharedObjects,
    },
    MoodleLatest: {
        url: process.env['AUTOQA_MOODLE_LATEST_HOME'],
        Common: CommonMoodlePage,
        ...SharedObjects,
    },
    MoodlePrevious: {
        url: process.env['AUTOQA_MOODLE_PREVIOUS_HOME'],
        Common: CommonMoodle3xPage,
        ...SharedObjects,
    },
    BrightSpace: {
        url: process.env['AUTOQA_BRIGHTSPACE_HOME'],
        Common: BrightSpacePage,
        ...SharedObjects,
    },
    Canvas: {
        url: process.env['AUTOQA_CANVAS_HOME'],
        Common: CanvasPage,
        ...SharedObjects,
    },
    MoodleRooms: {
        url: process.env['AUTOQA_MOODLE_ROOMS_HOME'],
        Common: CommonMoodleRoomsPage,
        ...SharedObjects,
    },
    BlackboardLatest: {
        url: process.env['AUTOQA_BLACKBOARD_LATEST'],
        Common: BlackboardCommonPage,
        ...SharedObjects,
    },
    BlackboardPrevious: {
        url: process.env['AUTOQA_BLACKBOARD_PREVIOUS'],
        Common: BlackboardCommonPage,
        ...SharedObjects,
    },
    Pearson: {
        url: process.env['AUTOQA_PEARSON_HOME'],
        urlMatcher: 'spider.mathxl.com',
        Common: PearsonCommonPage,
        ...SharedObjects,
    },
};
