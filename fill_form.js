const firstName = "";
const lastName = "";
const fullName = "";
const email = "";
const phone = "";
const city = "";
const linkedin = "";
const personalSite = "";
const github = "";
const githubProfile = "";
const legalCountry = "";
const currentCity = "";
const currentEmployer = "";
const skills = "";
const pronouns = "";

function setValue(selector, value, text = null) {
    let elements = document.querySelectorAll(selector);
    let elem = null;
    for (const e of elements) {
        if (text === null || e.innerText.includes(text)) {
            elem = e;
            break;
        }
    }
    if (elem != null) {
        if (elem instanceof HTMLInputElement) {
            elem.value = value;
            return;
        }
        while (elem.parentElement != null) {
            elem = elem.parentElement;
            let input = elem.querySelector("input[type='text']");
            if (input != null) {
                input.value = value;
                return;
            }
        }
    }
}

setValue("input#last_name", lastName);
setValue("input#first_name", firstName);
setValue("input[name='name'], input[name='full_name'], input[name='fullName']", fullName);
setValue("div", fullName, "Full name");
setValue("input#phone", phone);
setValue("input#email", email);
setValue("label", city, "Location (City)");
setValue("label", linkedin, "LinkedIn Profile");
setValue("div", linkedin, "LinkedIn");
setValue("input[name='linkedinUrl']", linkedin);
setValue("label", personalSite, "Website");
setValue("input[name='blogUrl']", personalSite);
setValue("label", github, "GitHub");
setValue("div", github, "GitHub");
setValue("div", github, "Portfolio");
setValue("input[name='githubUrl']", github);
setValue("label", githubProfile, "What is your GitHub handle?");
setValue("label", legalCountry, "In which of the following countries are you legally authorized to work in?");
setValue("label", "Yes", "Will you now or in the future require visa sponsorship for employment?");
setValue("label", currentCity, "current location");
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
setValue("div", skills, "Skills");
setValue("div", pronouns, "pronouns");
