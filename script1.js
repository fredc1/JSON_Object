document.getElementById("viewSavedAnswers").addEventListener("click", function () {
    window.location.href = 'results.html';
});
document.getElementById("submit").addEventListener("click", function () {
    storeToLocalStorage();
});

function storeToLocalStorage() {
    var ancestor = document.getElementById('container')
        , descendents = ancestor.getElementsByTagName('INPUT');
    var i, e;
    for (i = 0; i < descendents.length; ++i) {
        e = descendents[i];
        console.log(e.id.substring(0, e.id.indexOf("s")) + "form");
        if ((e.id.indexOf("s") != -1 && document.getElementById(e.id.substring(0, e.id.indexOf("s")) + "form").display != "none") || e.id.indexOf("s") == -1)
            if (e.type == "text") {
                localStorage.setItem(e.id, e.value);
            }
        if (e.type == "checkbox" || e.type == "radio") {
            localStorage.setItem(e.id, e.checked);
        }
    }
}

function generateForm() {
    var JSONsrc = JSON.parse('{ "concussion history": { "title": "Concussion History" , "description": "Please answer the following questions about your injury and leave any necessary comments." , "Questions": [{ "question": "How did you get your injury?" , "answers": [{ "type": "checkbox" , "text": "Fell" , "suboptions": [] }, { "type": "checkbox" , "text": "Hit head on stationary object:" , "suboptions": [{ "text": "Frozen ground (e.g. ice rink, ski/snowboarding trail, etc.)" , "type": "checkbox" }, { "text": "Grass" , "type": "checkbox" }, { "text": "Wall" , "type": "checkbox" }, { "text": "Car door" , "type": "checkbox" }, { "text": "Concrete" , "type": "checkbox" }, { "text": "Furniture" , "type": "checkbox" }, { "text": "Synthetic turf" , "type": "checkbox" }, { "text": "Pole" , "type": "checkbox" }, { "text": "Other:" , "type": "checkboxtext" }] }, { "type": "checkbox" , "text": "Hit on head with moving object:" , "suboptions": [{ "text": "Baseball/softball" , "type": "checkbox" }, { "text": "Soccer ball" , "type": "checkbox" }, { "text": "Hockey puck" , "type": "checkbox" }, { "text": "Basketball" , "type": "checkbox" }, { "text": "Lacrosse ball" , "type": "checkbox" }, { "text": "Sports equipment (e.g. hockey stick, golf club, etc.)" , "type": "checkbox" }, { "text": "Other:" , "type": "checkboxtext" }] }, { "type": "checkbox" , "text": "Collision:" , "suboptions": [{ "text": "Head to head" , "type": "checkbox" }, { "text": "Knee to head" , "type": "checkbox" }, { "text": "Fist to head" , "type": "checkbox" }, { "text": "Elbow to head" , "type": "checkbox" }, { "text": "Foot to head" , "type": "checkbox" }, { "text": "Other:" , "type": "checkboxtext" }] }] }, { "question": "Location of impact on head:" , "answers": [{ "type": "checkbox" , "text": "front" , "suboptions": [] }, { "type": "checkbox" , "text": "back" , "suboptions": [] }, { "type": "checkbox" , "text": "left side" , "suboptions": [] }, { "type": "checkbox" , "text": "right side" , "suboptions": [] }, { "type": "checkbox" , "text": "top" , "suboptions": [] }, { "type": "checkbox" , "text": "unknown or N/A" , "suboptions": [] }] }, { "question": "Were you wearing a helmet when you were injured?" , "answers": [{ "type": "radio" , "text": "yes" , "suboptions": [] }, { "type": "radio" , "text": "no" , "suboptions": [] }] }, { "question": "Were you wearing any other form of headgear when you were injured?" , "answers": [{ "type": "radio" , "text": "yes" , "suboptions": [{ "text": "If yes, please specify:" , "type": "text" } ] }, { "type": "radio" , "text": "no" , "suboptions": [] }] }, { "question": "Did you lose consciousness?" , "answers": [{ "type": "radio" , "text": "yes" , "suboptions": [{ "text": "If yes, for how long?" , "type": "text" } ] }, { "type": "radio" , "text": "no" , "suboptions": [] }] }, { "question": "Do you have full recollection of the events?" , "answers": [{ "type": "radio" , "text": "yes" , "suboptions": [] }, { "type": "radio" , "text": "no" , "suboptions": [] }] }, { "question": "Do you have any amnesia?" , "answers": [{ "type": "radio" , "text": "yes" , "suboptions": [{ "text": "If yes, for how long?" , "type": "text" }] }, { "type": "radio" , "text": "no" , "suboptions": [] }] }, { "question": "Have you ever had any prior concussions?" , "answers": [{ "type": "radio" , "text": "yes" , "suboptions": { "text": "If yes, please list dates and describe the details, setting sin which it happened, and how long it took for you to recover?" , "type": "text" } }, { "type": "radio" , "text": "no" , "suboptions": [] }] }, { "question": "Have you ever had any symptoms that may have resulted from a head injury?" , "answers": [{ "type": "radio" , "text": "yes" , "suboptions": [{ "text": "If yes, please list the dates and describe the details and setting in which it happened:" , "type": "text" }] }, { "type": "radio" , "text": "no" , "suboptions": [] }] }] } }');
    var title = document.createElement('h1');
    var description = document.createElement('h2');
    title.appendChild(document.createTextNode(JSONsrc["concussion history"]["title"]));
    title.id = "title";
    description.appendChild(document.createTextNode(JSONsrc["concussion history"]["description"]));
    container.appendChild(title);
    container.appendChild(description);
    for (i = 0; i < JSONsrc["concussion history"]["Questions"].length; i++) {
        var question = document.createElement('h3');
        question.innerHTML = JSONsrc["concussion history"]["Questions"][i].question;
        container.appendChild(question);
        var containerdiv = document.createElement('form');
        containerdiv.className = "option";
        for (j = 0; j < JSONsrc["concussion history"]["Questions"][i].answers.length; j++) {
            var input = document.createElement('input');
            var label = document.createElement('label')
            var textbox = document.createElement('input');
            label.htmlFor = "q" + i + "a" + j + "inp";
            label.appendChild(document.createTextNode(JSONsrc["concussion history"]["Questions"][i].answers[j].text));
            if (JSONsrc["concussion history"]["Questions"][i].answers[j].type.indexOf("checkbox") != -1) {
                input.type = "checkbox";
                input.id = "q" + i + "a" + j + "inp";
            }
            if (JSONsrc["concussion history"]["Questions"][i].answers[j].type.indexOf("radio") != -1) {
                input.type = "radio";
                input.name = "opt";
                input.id = "q" + i + "a" + j + "inp";
            }
            if (JSONsrc["concussion history"]["Questions"][i].answers[j].type.indexOf("text") != -1) {
                textbox.type = "text";
                textbox.id = "q" + i + "a" + j + "txt";
            }
            //Check if the id is set in the previous conditions; if so, put in the input option
            if (input.id != "") {
                containerdiv.appendChild(input);
            }
            containerdiv.appendChild(label);
            if (textbox.id != "") {
                containerdiv.appendChild(textbox);
            }
            var suboptionform = document.createElement('form');
            suboptionform.className = "subform";
            suboptionform.id = "q" + i + "a" + j + "form";
            for (k = 0; k < JSONsrc["concussion history"]["Questions"][i].answers[j].suboptions.length; k++) {
                var subcontainerdiv = document.createElement('div');
                var input = document.createElement('input');
                var label = document.createElement('label')
                var textbox = document.createElement('input');
                subcontainerdiv.className = "suboption";
                label.htmlFor = "q" + i + "a" + j + "s" + k + "inp";
                label.appendChild(document.createTextNode(JSONsrc["concussion history"]["Questions"][i].answers[j].suboptions[k].text));
                if (JSONsrc["concussion history"]["Questions"][i].answers[j].suboptions[k].type.indexOf("checkbox") != -1) {
                    input.type = "checkbox";
                    input.id = "q" + i + "a" + j + "s" + k + "inp";
                }
                if (JSONsrc["concussion history"]["Questions"][i].answers[j].suboptions[k].type.indexOf("radio") != -1) {
                    input.type = "radio";
                    input.name = "sub";
                    input.id = "q" + i + "a" + j + "s" + k + "inp";
                }
                if (JSONsrc["concussion history"]["Questions"][i].answers[j].suboptions[k].type.indexOf("text") != -1) {
                    textbox.type = "text";
                    textbox.id = "q" + i + "a" + j + "s" + k + "txt";
                }
                //Check if the input is set in the previous conditions; if so, put in the input option
                if (input.id != "") {
                    subcontainerdiv.appendChild(input);
                }
                subcontainerdiv.appendChild(label);
                if (textbox.id != "") {
                    subcontainerdiv.appendChild(textbox);
                }
                suboptionform.appendChild(subcontainerdiv);
            }
            containerdiv.appendChild(suboptionform);
            containerdiv.appendChild(document.createElement("br"));
        }
        container.appendChild(containerdiv);
    }
}
generateForm();
if (localStorage.length == 0) {
    storeToLocalStorage();
}
$(document).ready(function () {
    $('input:checkbox').change(function () {
        if ($(this).is(":checked")) {
            document.getElementById((this).id.substring(0, (this).id.length - 3) + "form").style.display = "inline";
        }
        else {
            document.getElementById((this).id.substring(0, (this).id.length - 3) + "form").style.display = "none";
        }
    });
    $('input:radio').change(function () {
        if ($("#" + (this).id.substring(0, (this).id.length - 4) + "0inp").is(":checked")) {
            document.getElementById((this).id.substring(0, (this).id.length - 4) + "0form").style.display = "inline";
        }
        else {
            document.getElementById((this).id.substring(0, (this).id.length - 4) + "0form").style.display = "none";
        }
    });
});