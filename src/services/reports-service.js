const report = {
  reportId: null,
  creator: null,
  customerId: null,
  category: null,
  description: null,
  assignedTo: null,
  createdAt: null,
  editedAt: null,
  closedAt: null,
  state: null,
  priority: null,
  comments: {
    commentId: null,
    userId: null,
    date: null,
    subject: null,
  },
};

let reports = [];

function createReport() {
  reports.push({
    reportId: "ETUR-RP-00001",
    creator: "John Doe",
    customerId: "ETUR-CN-34622",
    category: "Bug",
    description: "some description",
    assignedTo: "ETUR-UN-00001",
    createdAt: "2021-10-20",
    editedAt: "2021-10-20",
    closedAt: "2021-10-20",
    state: "open",
    priority: "high",
    comments: [
      {
        commentId: "ETUR-CM-00001",
        userId: "ETUR-UN-00001",
        date: "2021-10-20",
        subject: "some comment subject",
      },
    ],
  });
}

export function getReportsByCustomerId(customerId) {
  const filteredReports = reports.filter(
    (report) => report.customerId === customerId
  );
  return filteredReports;
}

export function getReportsByUserId(userId) {
  const filteredReports = reports.filter(
    (report) => (report.assignedTo || report.creator) === userId
  );
  return filteredReports;
}

export function getReportByReportId(reportId) {
  const foundReport = reports.find((report) => report.reportId === reportId);
  return foundReport;
}

export function createReport(
  reportId,
  creator,
  customerId,
  category,
  description,
  assignedTo,
  createdAt,
  editedAt,
  closedAt,
  state,
  priority
) {
  reports.push({
    reportId,
    creator,
    customerId,
    category,
    description,
    assignedTo,
    createdAt,
    editedAt,
    closedAt,
    state,
    priority,
    comments: [{}],
  });
  return getReportByReportId(reportId);
}

export function createComment(reportId, commentId, userId, date, subject) {
  const reportindex = reports.findIndex(
    (report) => report.reportId === reportId
  );
  reports[reportindex].comments.push({
    commentId,
    userId,
    date,
    subject,
  });
  return getReportByReportId(reportId);
}

export function patchReport(
  reportId,
  description,
  assignedTo,
  editedAt,
  closedAt,
  state,
  priority
) {
  const reportindex = reports.findIndex(
    (report) => report.reportId === reportId
  );

  if (description) {
    reports[reportindex].description = description;
  }
  if (assignedTo) {
    reports[reportindex].assignedTo = assignedTo;
  }
  if (editedAt) {
    reports[reportindex].editedAt = editedAt;
  }
  if (closedAt) {
    reports[reportindex].closedAt = closedAt;
  }
  if (state) {
    reports[reportindex].state = state;
  }
  if (priority) {
    reports[reportindex].priority = priority;
  }
  return getReportByReportId(reportId);
}

export function patchComment(commentId, userId, date, subject) {
  const reportindex = reports.findIndex(
    (report) => report.reportId === reportId
  );

  commentIndex = reports[reportindex].comments.findIndex(
    (comment) => comment.commentId === commentId
  );

  if (userId) {
    reports[reportindex].comments[commentIndex].description = description;
  }

  if (date) {
    reports[reportindex].comments[commentIndex].assignedTo = assignedTo;
  }

  if (subject) {
    reports[reportindex].comments[commentIndex].editedAt = editedAt;
  }
}

export function deleteReport(reportId) {
  const reportindex = reports.findIndex(
    (report) => report.reportId === reportId
  );
  reports.splice(reportindex, 1);
}

