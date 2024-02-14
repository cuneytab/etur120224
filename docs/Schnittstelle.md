# Design philosophy:
### BFF: Backend for Frontend
Why: The backend is developed exclusively for a frontend 

## Datenbankmodel 
### User
- *userId* 
- userName
- userEmail
- role: PM, Dev, Customer

### Report
- *ReportId*
- Creator: UserId
- #CustomerId
- category: Bug, Feedback, 
- description: string
- assignedTo: Liste: UserId
- createdAt: date
- editedAt: date
- closedAt: date
- state: open, closed, on hold
- priority: high, middle, low
- comments?: {
                userid
                date
                subject
            }

### Kunde (Firma)
- *customerId*
- customerName
- userIds: Liste: UserId
- #contactUserId
- customerEmail


## Endpunkte
*Get Endpunkte*
- getReportFromCustomer(CustomerId)
- getReportsFromUser(UserId)
- getUserInformation(UserId)
- getReportById(ReportId)
- getCustomerInformation(CustomerId)
- getUsersFromCompany(CustomerId)
- getAssignedCustomers(UserId)

*Post Endpunkte*
- createReport(...)
- createUser(..)
- createCustomer(...)
- createComment(ReportId, UserId, ...)

*Patch Endpunkte*
- updateReport(...)
- updateComment(ReportId, UserId, ...)
- updateCustomer(...)
- updateUser(...)

*Delete Endpunkte*
- deleteReport(ReportId)
- deleteComment(ReportId, UserId)
- deleteCustomer(CustomerId)
- deleteUser(UserId)


## Services
- Id validation
- DB controller
- 

### Error Handling Konzept
- General error handling 
- Component error handling 
- All errors have error code and description 

### Berechtigungssystem 
*User with role customer*
- All assigned user reports 
- All reports from assigned company 
- All users from assigned company 

*User with role Developer*
- All assigned user reports
- All reports from assigned company
- All users from assigned company

*User with role PM*
- All reports
- All Users
- All Customers

## Dependencys 
- Fastify
- @fastify/cors

## Requirements
- Node

