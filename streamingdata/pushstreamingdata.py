import pandas as pd
import requests
import json
import time
from datetime import datetime

# Define the endpoint URL
endpoint = "https://api.powerbi.com/beta/271d5e7b-1350-4b96-ab84-52dbda4cf40c/datasets/61ba41e8-d055-437a-8d64-fb8d5653cfd7/rows?experience=power-bi&subfolderId=3446&key=eF5AHjOamq5qd7FgSCp8gNLN%2FBZjUiXYcI954dvuuJ7g8N0H%2F9u1PKzBwoOOB743eUvowyXPt1QMB7VzWzr5Gg%3D%3D"

# Path to the Excel file
excel_path = r'employee_data.xlsx'

# Read the data from the Excel file
df = pd.read_excel(excel_path)

# Function to format dates
def format_date(date):
    if pd.isnull(date) or date == "-":
        return date
    return datetime.strptime(str(date), '%Y-%m-%d %H:%M:%S').strftime('%Y-%m-%dT%H:%M:%S.%fZ')

# Function to send data with retry mechanism
def send_data_with_retry(payload, max_retries=5):
    headers = {'Content-Type': 'application/json'}
    for attempt in range(max_retries):
        response = requests.post(endpoint, data=json.dumps([payload]), headers=headers)
        
        if response.status_code == 200:
            return True
        elif response.status_code == 429:
            wait_time = 2 ** attempt  # Exponential backoff
            print(f"Received 429 Too Many Requests. Retrying in {wait_time} seconds...")
            time.sleep(wait_time)
        else:
            print(f"Failed to send data. Status code: {response.status_code}, Response: {response.text}")
            return False
    return False

# Loop through each row and send the data
for index, row in df.iterrows():
    payload = {
        "Employee ID": row['Employee ID'],
        "Name & Lastname": row['Name & Lastname'],
        "Email2": row['Email2'],
        "Age": float(row['Age']),
        "Location": row['Location'],
        "Education": row['Education'],
        "Major": row['Major'],
        "Language": row['Language'],
        "Hobbies": row['Hobbies'],
        "Job": row['Job'],
        "Department": row['Department'],
        "Job Description": row['Job Description'],
        "Tenure": float(row['Tenure']),
        "Year of Experience": float(row['Year of Experience']),
        "Hard Skills": row['Hard Skills'],
        "Soft Skills": row['Soft Skills'],
        "Hire Date": format_date(row['Hire Date']),
        "Termination Date": format_date(row['Termination Date']) if row['Termination Date'] != "-" else "-",
        "Status": row['Status'],
        "Reason for leaving": row['Reason for leaving'],
        "Promotion last 5 years": row['Promotion last 5 years'],
        "Salary": float(row['Salary']),
        "Articulation": float(row['Articulation']),
        "Determination": float(row['Determination']),
        "Curiosity": float(row['Curiosity']),
        "Reasoning": float(row['Reasoning']),
        "Ownership": float(row['Ownership']),
        "Emotional Intelligent": float(row['Emotional Intelligent']),
        "Networking": float(row['Networking']),
        "Negotiation": float(row['Negotiation']),
        "Leadership": float(row['Leadership']),
        "Engagement": float(row['Engagement']),
        "Satisfaction": float(row['Satisfaction']),
        "Performance": float(row['Performance']),
        "Training participation": float(row['Training participation']),
        "Last Evaluation": float(row['Last Evaluation']),
        "Number of Project": float(row['Number of Project']),
        "Average monthly hours": float(row['Average monthly hours'])
    }

    success = send_data_with_retry(payload)
    if success:
        print(f"Successfully sent data for row {index + 1}")
    else:
        print(f"Failed to send data for row {index + 1} after multiple attempts.")
