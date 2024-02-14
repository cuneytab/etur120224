# Design philosophy:
### BFF: Backend for Frontend
Why: The backend is developed exclusively for a frontend 

## Datenbankmodel 
### User
- *UserId* 
- Name... (Metadata)
- Rolemanagement: PM, Dev, Customer

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
- *CustomerId*
- Company Name 
- #UserId


## Endpunkte
*Get Endpunkte*
- getReportFromCustomer(CustomerId)
- getReportsFromUser(UserId)
- getUserInformation(UserId)
- getReportById(ReportId)
- getCustomerInformation(CustomerId)
- getUsersFromCaompany(CustomerId)

*Post Endpunkte*
- createReport(UserId, CustomerId)
- createUser(CustomerId?)
- createCustomer()
- createComment(ReportId, UserId)

*Put Endpunkte*
- updateReport(ReportId)
- updateComment(ReportId, UserId)
- updateCustomer(CustomerId)
- updateUser(UserId)

*Delete Endpunkte*
- deleteReport(ReportId)
- deleteComment(ReportId, UserId)
- deleteCustomer(CustomerId)
- deleteUser(UserId)


## Services
- UserId validation
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

## Dependencys 
- Fastify
- @fastify/cors

## Requirements
- Node
