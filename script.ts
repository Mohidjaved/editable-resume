const detailForm = document.querySelector(".resume-container") as HTMLFormElement;
const finalForm = document.querySelector(".finalResume") as HTMLDivElement;
const profilePic = document.querySelector("#image") as HTMLInputElement;
const mainHead = document.querySelector(".main-head") as HTMLHeadElement;

detailForm.addEventListener("submit", (event) => {
    event.preventDefault(); 


    const userName = (document.querySelector("#name") as HTMLInputElement).value;
    const email = (document.querySelector("#email") as HTMLInputElement).value;
    const number = (document.querySelector("#number") as HTMLInputElement).value;
    const education = (document.querySelector("#education") as HTMLTextAreaElement).value;
    const skills = (document.querySelector("#skills") as HTMLTextAreaElement).value;
    const experience = (document.querySelector("#experience") as HTMLTextAreaElement).value;
    const about = (document.querySelector("#about") as HTMLTextAreaElement).value;

    let profileImageUrl = "";
    if (profilePic.files && profilePic.files[0]) {
        profileImageUrl = URL.createObjectURL(profilePic.files[0]);
    }

    const finalResume = `
        <h1>RESUME</h1>
        ${profileImageUrl ? `<img src="${profileImageUrl}" alt="Profile Image" style="max-width: 150px; height: auto; border-radius: 8px;">` : ""}
        <p class="final-resume-head"  contenteditable="true"><b>Name:</b> ${userName}</p>
        <p class="final-resume-head"  contenteditable="true"><b>Email:</b> ${email}</p>
        <p class="final-resume-head"  contenteditable="true"><b>Contact No:</b> ${number}</p>
        <p class="final-resume-head"  contenteditable="true"><b>Education:</b> ${education}</p>
        <p class="final-resume-head"  contenteditable="true"><b>Skills:</b> ${skills}</p>
        <p class="final-resume-head"  contenteditable="true"><b>Experience:</b> ${experience}</p>
        <p class="final-resume-head"  contenteditable="true"><b>About:</b> ${about}</p>
        <span>Note: You Can Now Edit This</span>
    `;

    if (finalForm) {
        finalForm.innerHTML = finalResume;
        detailForm.style.display = "none";
        mainHead.style.display = "none";
    }
}); 
