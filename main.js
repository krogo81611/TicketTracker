document.getElementById('issueInputForm').addEventListener('submit', saveIssue);


const fetchIssues = () => {
    let issues = JSON.parse(localStorage.getItem('issues'));
    let issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for (let i = 0; i<issues.length;i++) {
        let id = issues[i].id;
        let subject = issues[i].subject;
        let description = issues[i].description;
        let severity = issues[i].severity;
        let assignedTo = issues[i].assignedTo;
        let status = issues[i].status;

        let statusColor = status == 'Closed' ? 'label-success' : 'label-info';

        issuesList.innerHTML += 

    }
}

const saveIssue = e => {
    let issueId = chance.guid();
    let issueSubject = document.getElementById('issueSubjInput').value;
    let issueDescription = document.getElementById('issueDescInput').value;
    let issueSeverity = document.getElementById('issueSeverityInput').value;
    let issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    let issueStatus = 'Open'

    let issue = {
        id : issueId,
        subject : issueSubject,
        description : issueDescription,
        severity : issueSeverity,
        assignedTo : issueAssignedTo,
        status : issueStatus
    }
    
}