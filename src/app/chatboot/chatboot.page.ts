import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { ConversationalForm } from "conversational-form";

@Component({
  selector: "app-chatboot",
  templateUrl: "./chatboot.page.html",
  styleUrls: ["./chatboot.page.scss"],
})
export class ChatbootPage implements OnInit {
  @ViewChild("form") form: ElementRef;
  formulario: any;
  data: any;
  fields = [
    {
      tag: "cf-robot-message",
      "cf-questions": "Before your response the questions ",
    },
    {
      tag: "cf-robot-message",
      "cf-questions":
        "Heeeey, welcome to Bot from Ubuntu Colombia, remember our follow social media like: @ubuntuco",
    },
    {
      tag: "input",
      type: "text",
      required: "required",
      name: "name",
      "cf-questions": "What is your firstname?",
    },
    {
      tag: "input",
      type: "radio",
      name: "imagepicker",
      "cf-questions": "choose one of the two distributions?",
      "cf-label": "Lubuntu",
      "cf-image":
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Lubuntu_logo_only.svg/600px-Lubuntu_logo_only.svg.png",
    },
    {
      tag: "input",
      type: "radio",
      name: "imagepicker",
      "cf-label": "Xubuntu",
      "cf-image":
        "https://upload.wikimedia.org/wikipedia/commons/a/af/Xubuntu_logo.svg",
    },
    {
      tag: "input",
      type: "radio",
      name: "imagepicker",
      "cf-label": "Nope",
    },
    {
      tag: "input",
      required: "required",
      type: "text",
      name: "lastname",
      "cf-questions": "What is your email?",
    },
  ];

  constructor() {}

  ngOnInit() {
    console.log("init", this);
    this.formulario = ConversationalForm.startTheConversation({
      options: {
        theme: "dark",
        showProgressBar: true,
        submitCallback: this.submitCallback.bind(this),
        preventAutoFocus: true,
        robotImage:
          "https://pbs.twimg.com/profile_images/1120639951056572417/Rs0Dm2mm_400x400.jpg",
        userImage: "https://cdn.worldvectorlogo.com/logos/ubuntu-5.svg",
      },
      tags: this.fields,
    });
    this.form.nativeElement.appendChild(this.formulario.el);
  }
  submitCallback() {
    var formDataSerialized = this.formulario.getFormData(true);
    this.data = formDataSerialized;
    this.formulario.addRobotChatResponse(
      "Thanks, " +
        this.data.name +
        " by writing for us, we will contact you shortly."
    );
  }
}
