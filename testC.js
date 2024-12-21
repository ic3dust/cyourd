let reversedInput = '';
function processInput() {
    const input = document.getElementById("input").value;
    reversedInput = input.split('').reverse().join('');
    document.getElementById("output").innerHTML = reversedInput;
    return reversedInput;
}



function copy() {
    const copy = document.getElementById("output");
    copy.select();
    copy.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(copy.value)
        .then(() => {
            console.log("Succesful");
            alert(`Text ${copy.value} was successfully copied to clipboard!`);
        })
        .catch (err=> {
                console.log("Error = " + err);
            });
}



let tabIsOpen = false;

function reflect() {
    const refl1 = document.getElementById("refl1");
    const refl2 = document.getElementById("refl2");
    const refl1_2 = document.getElementById("refl1_2");
    const refl2_2 = document.getElementById("refl2_2");
    const tabdesc = document.getElementById("tabdesc");
    const book = document.getElementById("book");
    book.style.animation = '';
    refl1.style.animation = '';
    refl2.style.animation = '';
    refl1_2.style.animation = '';
    refl2_2.style.animation = '';
    tabdesc.style.animation = '';
    if (tabIsOpen) {
        refl1.style.animation = "refl1 2s ease forwards";
        book.style.animation = "bookAni 2s ease forwards";
        refl2.style.animation = "refl2 2s ease forwards";
        refl1_2.style.animation = "refl1_2 2s ease forwards";
        refl2_2.style.animation = "refl2_2 2s ease forwards";
        tabdesc.style.animation = "tabdescAnimation ease 2s forwards";
    } else {
        tabdesc.style.animation = "rev_tabdescAnimation ease 2s forwards";
        refl1.style.animation = "rev_refl1 2s ease forwards";
        refl2.style.animation = "rev_refl2 2s ease forwards";
        refl1_2.style.animation = "rev_refl1_2 2s ease forwards";
        refl2_2.style.animation = "rev_refl2_2 2s ease forwards";
        book.style.animation = "rev_bookAni 2s ease forwards";
    }
}

function rollTab() {
    const tab = document.getElementById("tab");
    tab.style.animation = '';
    if (tabIsOpen) {
        tab.style.animation = "rollOutTab 2s ease forwards";
    }
    else {
        tab.style.animation = "rollInTab 2s ease forwards ";
    }
    tabIsOpen = !tabIsOpen;
    reflect();
}

