// view model data, normally this wouldn't be in the global scope; or for that matter, it would come from an outside source.


var bio = {
    name: "Amine Fayad",
    role: "Web Developer",
    welcomeMesssage: "See what a web developer with OCPD can do for you...  OCPD is not a bug; it's a feature!",
    bioPic: "images/bioPicture.jpg",
    contacts: {
        homeNumber: "609-906-8009",
        "mobile number": "516-554-0007",
        email: "aminefayad@hotmail.com",
        // no twitter, no github, and no blog accounts.  Per instructions, not all these entries are required to exist here.  However, if provided, they will display accordingly...
        //twitter: null, 
        //github: null, 
        //blog: null,
        location: "4004 Broadway, Allentown, PA"
    },
    skills: [
        "anankastic",
        "orderliness",
        "perfectionism",
        "mental & interpersonal control",
        "control of work envionrment"
    ]
};

var work = {
    jobs: [
        {
            employer: "Encapsulated Solutions, Inc.",
            title: "CEO",
            location: "4004 Broadway, Allentown, PA",
            "dates worked": "Sep 2011 - Present",
            description: "Responsible for the procurement and full life-cycle development of software solutions.  Plan, conduct, and manage development of assignments.  Initiate major changes in architecture, methodology, and/or programming procedures.  Imparts technical expertise to other programmers.  Define business needs where analysis of situations or data requires an in-depth evaluation of complex business process, system process, and industry standards.  Architect database, project structures, component, and UI designs.  Determine management of workforce and technical approaches to achieving solutions.  Also responsible for fixing the world.",
            url: "http://encapsulatedsolutions.com"
        },
        {
            employer: "Sterling Infosystems, Inc.",
            title: "Senior .NET Developer",
            location: "One State Street, 24th Floor, New York, NY",
            "dates worked": "Jun 2007 - Jul 2011",
            description: "Provides strategic technical and architectural leadership to the programming function.  Acted as a key interface between IT and key business users/senior management in defining IT solution based on business needs.  Continually develop cost/benefit analysis on multiple cost saving projects.  Also troubleshooting program errors, which in most cases, the problem was identified to be between keyboard and chair.",
            url: "http://sterlingbackcheck.com"
        }
    ]
};

var projects = {
    projects: [
        {
            title: "Flash Dashboard v2.0",
            "dates worked": "2014",
            description: "An Adobe Flex web application that allows partners and managers to get a high-level view of their firm, practice group, department, office, and employee's progress via financial metrics on work in progress, net billings, collections, and accounts receivables.",
            images: ["images/ResumeProject2a.png", "images/ResumeProject2b.png"],
            url: "https://mpsdashboard.markspaneth.com/version2.aspx"
        },
        {
            title: "Recruiter Module v2.1",
            "dates worked": "2008",
            description: "A B2B ASP.NET web application (built from the ground up) to be maintainable, scalable, extendable, and customizable with a custom built UI abstraction layer called FAML.  The web application allows recruiters to perform various background checks/tests on candidates ranging from alcohol, drug, criminal, theft, sexual offenders, and criminal to DMV, credit, education, employment, and social security trace verifications.  This application was built using ASP.NET 3.5 and extended the .NET Framework through general purpose Extension Methods and custom domain specific objects to facilitate better testing and error handling.",
            images: ["images/ResumeProject1a.png", "images/ResumeProject1b.png", "images/ResumeProject1c.png", "images/ResumeProject1d.png"],
            url: "https://portal.sterlingdirect.com"
        }
    ]
};

var education = {
    schools: [
        {
            name: "SetFocus, LLC",
            location: "4 Century Drive, Parsippany, NJ",
            degree: "Certificate",
            majors: ["Visual Basic 6.0", "SQL Server 7.0", "Visual InterDev 6.0"],
            "dates attended": "1999",
            url: "http://www.setfocus.com/"
        },
        {
            name: "The Chubb Institue",
            location: "8 Sylvan Way, 1st Floor, Parsippany, NJ",
            degree: "Diploma",
            majors: ["Computer Programming"],
            "dates attended": "1998",
            url: "http://www.chubb.com/"
        }
    ],
    onlineCourses: [
        {
            title: "Intro to HTML and CSS",
            school: "Udacity",
            "dates attended": "2014",
            url: "https://www.udacity.com/course/ud304"
        },
        {
            title: "JavaScript Basics",
            school: "Udacity",
            "dates attended": "2014",
            url: "https://www.udacity.com/course/ud804"
        }
    ]
};



