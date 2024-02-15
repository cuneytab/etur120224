import Fastify from "fastify";
import cors from "@fastify/cors";
import {
  createReport,
  getReportsByCustomerId,
  getReportsByUserId,
  getReportByReportId,
  createComment,
  patchReport,
  patchComment,
  deleteReport,
  deleteComment,
} from "../services/reports-service.js";

const fastify = Fastify({
  logger: true,
});

fastify.register(cors, {
  origin: '*'
});

const report = {
  reportId: "ETUR-RP-00001",
  creator: "John Doe",
  customerId: "ETUR-CN-34622",
  category: "Bug",
  description: "some description",
  owner: "ETUR-UN-00001",
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
      {
      commentId: "ETUR-CM-00001",
      userId: "ETUR-UN-00001",
      date: "2021-10-20",
      subject: "second comment subject",
    },
  ],
};

const standardItemScheme = {
  type: "object",
  properties: {
    reportId: { type: "string" },
    creator: { type: "string" },
    customerId: { type: "string" },
    category: { type: "string" },
    description: { type: "string" },
    owner: { type: "string" },
    assignedTo: { type: "string" },
    createdAt: { type: "string" },
    editedAt: { type: "string" },
    closedAt: { type: "string" },
    state: { type: "string" },
    priority: { type: "string" },
    comments: {
      type: "array",
      items: {
        type: "object",
        properties: {
          commentId: { type: "string" },
          userId: { type: "string" },
          date: { type: "string" },
          subject: { type: "string" },
        },
      },
    },
  },
};

const reportSchemeArray = {
  schema: {
    response: {
      200: {
        type: "array",
        items: standardItemScheme,
      },
    },
  },
};

const reportSchemeSingle = {
  schema: {
    response: {
      200: standardItemScheme,
    },
  },
};

// Get reports from customer
fastify.get(
  "/getReportFromCustomer/:id",
  reportSchemeArray,
  async function handler(request, reply) {
    const customerId = request.params.id;
    const reports = getReportsByCustomerId(customerId);
    reply.send(reports);
  }
);

// Get reports from user
fastify.get(
  "/getReportFromUser/:id",
  reportSchemeArray,
  async function handler(request, reply) {
    const userId = request.params.id;
    const reports = getReportsByUserId(userId);
    reply.send(reports);
  }
);

// get report by report id
fastify.get(
  "/getReportById/:id",
  reportSchemeSingle,
  async function handler(request, reply) {
    const reportId = request.params.id;
    const report = getReportByReportId(reportId);
    reply.send(report);
  }
);

// create report
fastify.post("/createReport", async function handler(request, reply) {
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
});

// create comment
fastify.post(
  "/createComment",
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
  async function handler(request, reply) {
    const reportId = request.params.id;
    deleteReport(reportId);
    reply.send("Report deleted");
  }
);

//delete comment
fastify.delete(
  "/deleteComment/:id",
  async function handler(request, reply) {
    const commentId = request.params.id;
    deleteComment(commentId);
    reply.send("Comment deleted");
  }
);

// Run the server!
try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
