import Fastify from "fastify";
import cors from "@fastify/cors";

const fastify = Fastify({
  logger: true,
});

// Get reports from customer
fastify.get(
  "/getReportFromCustomer/:id",
  reportScheme,
  async function handler(request, reply) {
    const customerId = request.params.id;
    const reports = getReportsByCustomerId(customerId);
    reply.send(reports);
  }
);

// Get reports from user
fastify.get(
  "/getReportFromUser/:id",
  reportScheme,
  async function handler(request, reply) {
    const userId = request.params.id;
    const reports = getReportsByUserId(userId);
    reply.send(reports);
  }
);

// get report by report id
fastify.get(
  "/getReportById/:id",
  reportScheme,
  async function handler(request, reply) {
    const reportId = request.params.id;
    const report = getReportByReportId(reportId);
    reply.send(report);
  }
);

// create report
fastify.post(
  "/createReport",
  reportScheme,
  async function handler(request, reply) {
    const report = request.body;
    const newReport = createReport(
      report.reportId,
      report.creator,
      report.customerId,
      report.category,
      report.description,
      report.assignedTo,
      report.createdAt,
      report.editedAt,
      report.closedAt,
      report.state,
      report.priority
    );
    reply.send(newReport);
  }
);

// create comment
fastify.post(
  "/createComment",
  reportScheme,
  async function handler(request, reply) {
    const comment = request.body;
    const newComment = createComment(
      comment.reportId,
      comment.userId,
      comment.date,
      comment.subject
    );
    reply.send(newComment);
  }
);

// update report
fastify.patch(
  "/updateReport/:id",
  reportScheme,
  async function handler(request, reply) {
    const report = request.body;
    const updatedReport = patchReport(
      report.reportId,
      report.description,
      report.assignedTo,
      report.editedAt,
      report.closedAt,
      report.state,
      report.priority
    );
    reply.send(updatedReport);
  }
);

// update comment
fastify.patch(
  "/updateComment/:id",
  reportScheme,
  async function handler(request, reply) {
    const comment = request.body;
    const updatedReport = patchComment(
      comment.commentId,
      comment.userId,
      comment.date,
      comment.subject
    );
    reply.send(updatedReport);
  }
);

// delete report
fastify.delete(
  "/deleteReport/:id",
  reportScheme,
  async function handler(request, reply) {
    const reportId = request.params.id;
    deleteReport(reportId);
    reply.send("Report deleted");
  }
);
