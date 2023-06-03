# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## 1. Ticket 1: Update Agent model and database schema

### Description

Currently, the Agent model in the database only includes the internal database id. To support custom ids for Agents, we need to update the Agent model and database schema.

### Acceptance Criteria

Add a new field named "customId" to the Agent model in the database.
Modify the Agent database schema to include the "customId" field.
The "customId" field should be unique for each Agent.
The "customId" field should be editable by Facilities.

### Effort Estimate

 3 hours

### Implementation Details

Add the "customId" field to the Agent model in the application code.
Modify the database schema to include the "customId" field in the Agents table.
Implement the necessary API endpoints or user interface to allow Facilities to edit and save custom ids for Agents.

### Test Plan

Write unit tests to verify the addition of the "customId" field to the Agent model and the database schema modification.
Test the API endpoints or user interface to ensure Facilities can successfully edit and save custom ids for Agents.

### Dependencies

None

### Risks and Considerations

Ensure that the "customId" field is properly validated to maintain uniqueness and avoid conflicts with existing ids.
Documentation Updates:

Update the relevant documentation to provide instructions on how Facilities can edit and save custom ids for Agents.

## 2. Ticket 2: Update getShiftsByFacility function

### Description

Modify the getShiftsByFacility function to include the custom id of the Agent in the returned Shifts.

### Acceptance Criteria

Update the getShiftsByFacility function to fetch and include the custom id of the Agent in the Shift metadata.

### Effort Estimate

 2 hours

### Implementation Details

Modify the database query within the getShiftsByFacility function to fetch the custom id of the Agent.
Update the function's response structure to include the custom id in the Shift metadata.

### Test Plan

Write unit tests to ensure that the getShiftsByFacility function correctly fetches and includes the custom id of the Agent in the Shift metadata.

### Dependencies

Ticket 1 (Update Agent model and database schema)

### Risks and Considerations

Ensure that the custom id is correctly fetched and mapped to the respective Shifts.

## 3. Ticket 3: Update generateReport function

### Description

The current report generation process uses the internal database id for Agents. Update the generateReport function to use custom ids when generating reports.

### Acceptance Criteria

Modify the generateReport function to retrieve the custom id of each Agent from the database.
Update the report generation logic to use the custom ids instead of the internal database ids.

### Effort Estimate

 2 hours

### Implementation Details

Fetch the custom ids of Agents assigned to Shifts within the generateReport function.
Update the report generation logic to use the custom ids instead of the internal database ids.

### Test Plan

Write unit tests to verify that the generateReport function correctly retrieves custom ids and uses them in the report generation process.
Perform end-to-end testing to ensure that the generated reports display the custom ids of Agents.

### Dependencies

Ticket 1 (Update Agent model and database schema), Ticket 2 (Update getShiftsByFacility function)

### Risks and Considerations

Ensure that the custom ids are correctly fetched and mapped to the respective Agents in the report generation process.

## 4. Ticket 4: Facility Interface for Managing Agent custom ids

### Description

Create a user interface within the Facility portal to allow Facilities to manage custom ids for Agents.

### Acceptance Criteria

Develop a user interface in the Facility portal to add, edit, and delete custom ids for Agents.
Implement validation to ensure custom ids are unique and meet any specified requirements.

### Effort Estimate

 5 hours

### Implementation Details

Design and develop the user interface within the Facility portal to provide options for managing custom ids.
Implement form validation to ensure custom ids are unique and meet any specified requirements.
Create API endpoints or backend logic to handle the saving, editing, and deletion of custom ids for Agents.

### Test Plan

Test the user interface functionality to add, edit, and delete custom ids for Agents.
Validate the form validation rules to ensure custom ids are correctly validated and conflicts are avoided.

### Dependencies

Ticket 1 (Update Agent model and database schema)

### Risks and Considerations

Ensure that the custom id management interface is intuitive and user-friendly.

## 5. Ticket 5: Update Report PDF Template

### Description

Update the report PDF template to display the custom ids of Agents instead of the internal database ids.

### Acceptance Criteria

Modify the report PDF template to replace the internal database id with the custom id when displaying the Agent ID.

### Effort Estimate

 2 hours

### Implementation Details

Update the report PDF template to include the custom id field and replace the internal database id with the custom id when displaying the Agent ID.

### Test Plan

Generate sample reports using the updated PDF template and verify that the custom ids are correctly displayed.

### Dependencies

Ticket 3 (Update generateReport function)

### Risks and Considerations

Ensure that the PDF generation process handles the custom id field correctly.

## 6. Ticket 6: Documentation Updates

### Description

Update the documentation to provide instructions on how Facilities can set and manage custom ids for Agents.

### Acceptance Criteria

Update the relevant sections of the documentation to include instructions on setting and managing custom ids for Agents.
Provide examples and guidelines to ensure Facilities understand how to use custom ids when generating reports.

### Effort Estimate

 1 hour

### Implementation Details

Review the existing documentation and identify the sections that need updates.
Add clear instructions and examples on how Facilities can set and manage custom ids for Agents.
Ensure the documentation reflects the changes made in previous tickets.

### Test Plan

Review the updated documentation for clarity and accuracy.
Seek feedback from stakeholders or Facilities to ensure the instructions are clear and easily understandable.

### Dependencies

None

### Risks and Considerations

Ensure that the updated documentation is comprehensive and provides sufficient guidance on using custom ids for Agents.
