export function checkCustomerIdFormat(customerId) {
    const pattern = /ETUR-CN-\w+/;
    const isValid = pattern.test(customerId);
    if (!isValid) {
        console.log("No valid Customer Id Format");
        return false;
    } else {
        return true;
    }
}

export function checkUserIdFormat(userId) {
    const pattern = /ETUR-UN-\w+/;
    const isValid = pattern.test(userId);
    if (!isValid) {
        console.log("No valid User Id Format");
        return false;
    } else {
        return true;
    }
}

export function checkReportIdFormat(reportId) {
    const pattern = /ETUR-RP-\w+/;
    const isValid = pattern.test(reportId);
    if (!isValid) {
        console.log("No valid Report Id Format");
        return false;
    } else {
        return true;
    }
}

export function checkCommentIdFormat(commentId) {
    const pattern = /ETUR-CM-\w+/;
    const isValid = pattern.test(commentId);
    if (!isValid) {
        console.log("No valid Comment Id Format");
        return false;
    } else {
        return true;
    }
}