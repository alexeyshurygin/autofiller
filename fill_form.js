const firstName = "";
const lastName = "";
const email = "";
const phone = "";
const city = "";
const linkedin = "";
const personalSite = "";
const github = "";
let githubProfile = "";
let currentCountry = "";
const currentCity = "";
const currentEmployer = "";

function setValue(selector, value, text = null) {
    let elements = document.querySelectorAll(selector);
    let elem = null;
    if (text != null) {
        for (const e of elements) {
            if (e.innerText.trim().includes(text)) {
                elem = e;
                break;
            }
        }
    }
    if (elem != null) {
        let input = elem.parentElement.querySelector("input[type='text']");
        if (input === null) {
            input = elem.parentElement.querySelector("input[type='text']");
        }
        if (input != null) {
            input.value = value;
        }
    }
}

document.getElementById("last_name").value = lastName;
document.getElementById("first_name").value = firstName;
document.getElementById("phone").value = phone;
document.getElementById("email").value = email;
setValue("label", city, "Location (City)");
setValue("label", linkedin, "LinkedIn Profile");
setValue("label", personalSite, "Website");
setValue("label", github, "GitHub Profile");
setValue("label", githubProfile, "What is your GitHub handle?");
setValue("label", currentCountry, "In which of the following countries are you legally authorized to work in?");
setValue("label", "Yes", "Will you now or in the future require visa sponsorship for employment?");
setValue("label", currentCity, "Please provide your current location:");
setValue("label", "Yes", "Have you ever worked remotely before?");
setValue("label", "Loneliness - use Slack, get a hobby, have a walk, meet friends IRL. Control - status meetings, PRs and Jira board will" +
    " compensate" +
    " for" +
    " that.", "What do you think are some of the challenges of" +
    " working" +
    " remotely, and how would you address them?");
setValue("label", "On your website", "How did you hear about this job?");
setValue("label", "Yes", "Please acknowledge that you've read the GitHub Candidate Privacy Policy.");
setValue("label", currentEmployer, "Who is your current employer? N/A if not applicable");
setValue("label", "Male", "Gender (Select one)");
setValue("label", "Yes", "GitHub has my consent to collect, store, and process my data for the purpose of considering me for employment, and" +
    " for up to 365 days thereafter.");
