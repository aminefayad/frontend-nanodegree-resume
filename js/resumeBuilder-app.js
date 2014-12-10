/// <reference path="jQuery.js" />
/// <reference path="helper.js" />
/// <reference path="resumeBuilder.js" />

// stub for helper.js to work for internationalize feature.
var name = bio.name;
function inName(name) {
    return resumeApp.toggleInternationalization();
};





// object for encapsulating functions for various sections and only exposing one function to render all sections.
var ResumeApp = function () { };
ResumeApp.prototype = function () {
    var data = "%data%"; // constant to reduce typos.
    var contact = "%contact%"; // constant to reduce typos.

    var originalName = "";

    var displayBio = function () {
        var jHeader = $("#header")// local jquery variables that will be used in this function.
        if (bio) { // making sure the object exists.
            // setting the name (first and only time) so we can toggle back and forth regarding the internatinalizing feature.
            if (originalName === "") {
                originalName = bio.name;
            }
            // these are required fields, so it's ok if they show up as undefined.
            jHeader
                .prepend(HTMLheaderRole.replace(data, clean(bio.role)))
                .prepend(HTMLheaderName.replace(data, clean(bio.name)))
                .prepend(internationalizeButton.replace("Internationalize", "Toggle Internationalization") + "<br />") // internationalizing feature to support helper.js
                .append(HTMLbioPic.replace(data, clean(bio.bioPic)))
                .append(HTMLWelcomeMsg.replace(data, clean(bio.welcomeMesssage)))
            ;
            displayBioContacts($("#topContacts"));
            displayBioContacts($("#footerContacts"));
            if (bio.skills && bio.skills.length > 0) { // making sure the object exists and contains items.
                jHeader.append(HTMLskillsStart);
                var jSkills = $("#skills");
                for (var i in bio.skills) {
                    var skill = clean(bio.skills[i]);
                    jSkills.append(HTMLskills.replace(data, skill));
                }

            }
        }
    };

    var displayBioContacts = function (jContainer) {
        if (bio && bio.contacts) { // making sure the object exists.
            // these are optional fields, so we only display them if they have data.
            if (bio.contacts.homeNumber) jContainer.append(HTMLcontactGeneric.replace(contact, "home").replace(data, clean(bio.contacts.homeNumber)));
            if (bio.contacts["mobile number"]) jContainer.append(HTMLmobile.replace(data, clean(bio.contacts["mobile number"])));
            if (bio.contacts.email) {
                // enhancing email with mailto link.
                var aEmailBegin = '<a class="inline" href="mailTo:' + clean(bio.contacts.email) + '?subject=Impressive resume!&body=We are interested in discussing a potential opportunity with you.  Please let us know your next availability so we can schedule a call.">';
                var aEmailEnd = "</a>";
                jContainer.append(HTMLemail.replace(data, aEmailBegin + clean(bio.contacts.email) + aEmailEnd));
            }
            if (bio.contacts.twitter) jContainer.append(HTMLtwitter.replace(data, clean(bio.contacts.twitter)));
            if (bio.contacts.github) jContainer.append(HTMLgithub.replace(data, clean(bio.contacts.github)));
            if (bio.contacts.blog) jContainer.append(HTMLblog.replace(data, clean(bio.contacts.blog)));
            if (bio.contacts.location) {
                // enhancing location with link to google maps.
                var aAddressBegin = '<a class="inline" href="https://www.google.com' + '/maps/place/' + clean(bio.contacts.location).replace(/ /g, "+") + '">';
                var aAddressEnd = '</a>';
                jContainer.append(HTMLlocation.replace(data, aAddressBegin + clean(bio.contacts.location) + aAddressEnd));
            }
        }
    }

    var displayWork = function () {
        var jWork = $("#workExperience");// local jquery variables that will be used in this function.
        if (work && work.jobs && work.jobs.length > 0) { // making sure the object exists and contains items.
            for (var i in work.jobs) {
                var job = work.jobs[i];  // local variable, used a few times in this function.
                jWork.append(HTMLworkStart);
                $(".work-entry:last")
                    .append(HTMLworkEmployer.replace("#", clean(job.url)).replace(data, clean(job.employer)) + HTMLworkTitle.replace(data, clean(job.title)))
                    .append(HTMLworkDates.replace(data, clean(job["dates worked"])))
                    .append(HTMLworkLocation.replace(data, clean(job.location)))
                    .append(HTMLworkDescription.replace(data, clean(job.description)))
                ;
            }
        }
    };

    var displayProjects = function () {
        var jProjects = $("#projects");
        if (projects && projects.projects && projects.projects.length > 0) {
            for (var i in projects.projects) {
                var project = projects.projects[i];
                jProjects.append(HTMLprojectStart);
                $(".project-entry:last")
                    .append(HTMLprojectTitle.replace("#", clean(project.url)).replace(data, clean(project.title)))
                    .append(HTMLprojectDates.replace(data, clean(project["dates worked"])))
                    .append(HTMLprojectDescription.replace(data, clean(project.description)))
                ;
                if (project.images && project.images.length > 0) {
                    for (var i in project.images) {
                        var imageUrl = clean(project.images[i]);
                        var aImageBegin = '<a class="inline" href="' + imageUrl + '">';
                        var aImageEnd = '</a>';
                        $(".project-entry:last").append(aImageBegin + HTMLprojectImage.replace(data, imageUrl) + aImageEnd);
                    }
                }
            }
        }
    };

    var displayEducation = function () {
        var jEducation = $("#education");
        if (education) {
            if (education.schools && education.schools.length > 0) {
                for (var i in education.schools) {
                    var school = education.schools[i];
                    jEducation.append(HTMLschoolStart);
                    var majors = [];
                    if (school.majors && school.majors.length > 0) {
                        for (var i in school.majors) {
                            majors.push(clean(school.majors[i]));
                        }
                    }
                    $(".education-entry:last")
                        .append(HTMLschoolName.replace("#", clean(school.url)).replace(data, clean(school.name)) + HTMLschoolDegree.replace(data, clean(school.degree)))
                        .append(HTMLschoolDates.replace(data, clean(school["dates attended"])))
                        .append(HTMLschoolLocation.replace(data, clean(school.location)))
                        .append(HTMLschoolMajor.replace(data, majors.join(" | ")))
                    ;
                }
            }
            if (education.onlineCourses && education.onlineCourses.length > 0) {
                jEducation.append(HTMLonlineClasses);
                for (var i in education.onlineCourses) {
                    var onlineCourse = education.onlineCourses[i];
                    jEducation.append(HTMLschoolStart);
                    $(".education-entry:last")
                        .append(HTMLonlineTitle.replace("#", clean(onlineCourse.url)).replace(data, clean(onlineCourse.title)) + HTMLonlineSchool.replace(data, clean(onlineCourse.school)))
                        .append(HTMLonlineDates.replace(data, clean(onlineCourse["dates attended"])))
                        .append(HTMLonlineURL.replace("#", clean(onlineCourse.url)).replace(data, clean(onlineCourse.url)))
                    ;
                }
            }

        }

    };


    var displayMap = function () {
        $("#mapDiv").append(googleMap);
    }

    var clean = function (htmlString) {
        return (htmlString || "").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };



    var display = function () {
        displayBio();
        displayWork();
        displayProjects();
        displayEducation();
        displayMap();
    };

    // normally, this would not be necessary, but to satisfy the instructions for grading purposes (here goes..):
    bio.display = displayBio;
    work.display = displayWork;
    projects.display = displayProjects;
    education.display = displayEducation;
    // end of abnormality.

    var toggleInternationalization = function () {
        var currentName = ($('#name').text() || "");
        var parts = currentName.trim().split(" ");
        if (parts.length !== 2) {
            throw Error("Cannot internationalize name because it only supports a first name and a last name separated by a singe space.");
        }
        var firstName = parts[0];
        var lastName = parts[1].toUpperCase();
        var newName = firstName + " " + lastName;
        if (currentName === newName) {
            return originalName;
        } else {
            return newName;
        }
    };


    return { display: display, toggleInternationalization: toggleInternationalization };
}();


// creating an instance of our main object and displaying all sections.
// the ResumeApp object encapsulates all specific display sections (aka: private methods).
var resumeApp = new ResumeApp();
resumeApp.display();  // NOTE: Per instructions (and grading), you could also call the individual methods on each json section such as work.display(); You can run them in any order instead of using this line.



