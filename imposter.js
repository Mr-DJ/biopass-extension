// step 1 : get submit button
let re = /(Log\s*in|Sign\s*up|Sign\s*in|Register)/gim;
let possibleSubmits = document.querySelectorAll("input,button");
let submitButton =
  document.querySelectorAll("input[type=submit]")[0] ||
  document.querySelectorAll("button[type=submit]")[0];

if (submitButton.id == "subb") {
  submitButton = undefined;
}

if (!submitButton) {
  for (var i = 0; i < possibleSubmits.length; i++) {
    // console.log(possibleSubmits[i]);
    if (possibleSubmits[i].id == "subb") possibleSubmits[i].remove();
    console.log(possibleSubmits[i].textContent.trim());
    if (re.test(possibleSubmits[i].textContent.trim())) {
      submitButton = possibleSubmits[i];
      break;
    }
  }
}

//step 2: make a clone witha ll the nested attrs
//tbd: disable all submission triggers on parents start from clone to all the clones children
var clone = submitButton.cloneNode(true);
clone.onclick = () => console.log('fake haha');
clone.type = 'button';

//step 3: get parent of submit
const parent = submitButton.parentNode

//step 4: replace the child
parent.replaceChild(clone, submitButton);

//step 4: restore old button
parent.replaceChild(submitButton, clone);
