const policyMaker = () => {
  class PolicyMaker {
    constructor() {
      this.submit = document.querySelector("#create-policy");
      this.copyPolicy = document.querySelector("#copy-policy");
      this.thirdPartyAdd = document.querySelector("#thirdparty-add");
      this.bindEvents();
    }

    bindEvents() {
      this.thirdPartyAdd.addEventListener(
        "click",
        this.addThirdParty.bind(this)
      );

      this.submit.addEventListener("click", () => {
        this.topFunction();
        this.createDocument();
      });

      this.copyPolicy.addEventListener("click", () => {
        this.copyPolicyFunc();
      });
    }

    topFunction() {
      window.location='https://www.alura.io/resources/etsy-privacy-policy-generator#epp-top';
    }

    setDate() {
      const date = new Date();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      const day = date.getDate();
      const monthIndex = date.getMonth();
      const year = date.getFullYear();
      return `${day} ${monthNames[monthIndex]} ${year}`;
    }

    create(htmlStr) {
      let frag = document.createDocumentFragment(),
        temp = document.createElement("div");
      temp.innerHTML = htmlStr;
      while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
      }
      return frag;
    }

    addThirdParty() {
      const newThird = this.create(
        `<div class="epp-service-provder">
        <input type="text" class="efc-input epp epp-tpp w-input" maxlength="256" name="Third-Party-Name" data-name="Third Party Name" placeholder="Name of third party (e.g. UPS)" id="third-party-name">
        <input type="text" class="efc-input epp epp-ppsp w-input" maxlength="256" name="Third-party-service" data-name="Third party service" placeholder="Service they provide (e.g. to deliver your order)" id="third-party-service">
        </div>`
      );
      document.querySelector(".epp-service-providers").appendChild(newThird);
    }

    copyPolicyFunc() {
      const copyTextarea = document.querySelector('.epp-policy-text').innerText;
      this.copyToClipboard(copyTextarea);
      console.log('this fires');
    }

    copyToClipboard(str) {
      const el = document.createElement('textarea');
      el.value = str;
      el.setAttribute('readonly', '');
      el.style.position = 'absolute';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    };

    createDocument() {
      this.disclaimerConsent = document.querySelector(
        "#disclaimer-consent"
      ).checked;
      if (!this.disclaimerConsent) {
        return false;
      }

      this.etsyShopName = document.querySelector("#etsy-shop-name").value;
      this.etsyShopUrl = document.querySelector("#etsy-shop-url").value;
      this.contactEmail = document.querySelector("#contact-email").value;
      this.individual = document.querySelector("#Individual").checked;
      this.business = document.querySelector("#Business").checked;
      this.businessName = document.querySelector("#business-name").value;
      this.businessAddress = document.querySelector("#business-address").value;
      this.googleAnalytics =
        document.querySelector("#toggle-google-analytics").style
          .backgroundColor === "rgb(64, 124, 222)";
      this.dataController = document.querySelector("#data-controller").value;
      this.dataControllerContact = document.querySelector(
        "#data-controller-contact"
      ).value;
      this.thirdPartyName = document.querySelectorAll("#third-party-name");
      this.thirdPartyService = document.querySelectorAll(
        "#third-party-service"
      );
      this.toggleMarketing =
        document.querySelector("#toggle-remarketing").style.backgroundColor ===
        "rgb(64, 124, 222)";
      this.toggleEu =
        document.querySelector("#toggle-sells-to-eu").style.backgroundColor ===
        "rgb(64, 124, 222)";
      this.addToEtsy = document.querySelector("#add-to-etsy");

      this.addToEtsy.href = `${this.etsyShopUrl}/edit#policies`;

      document.querySelector(".epp-success-policy-section").innerHTML = `
<div class="epp-policy-text">
<strong>${this.etsyShopName} Privacy Policy </strong>
<br />
Last updated ${this.setDate()}. <br />
<br />
This Privacy Policy describes how and when ${
        this.etsyShopName
      } (“I”, “me”, “my”) collects, uses, and shares information when you purchase an item from ${
        this.etsyShopName
      } (${
        this.etsyShopUrl
      }), contact me, or otherwise use my services through Etsy.com or its related sites and services.
<br />
<br />
You agree that by purchasing an item from ${
        this.etsyShopName
      } or otherwise interacting with ${
        this.etsyShopName
      }, you have read, understood, and agree to be bound by all of the terms of  this Privacy Policy. If you do not agree, you must leave ${
        this.etsyShopName
      } immediately.
<br />
<br />
I may change this Privacy Policy from time to time. If I make changes, I will notify you by revising the date at the top of the page.
<br />
<br />
This Privacy Policy does not apply to the practices of third parties that I do not own or control, including Etsy or any third party services you access through Etsy or through ${
        this.etsyShopName
      }. You can reference the Etsy Privacy Policy to learn more about Etsy’s privacy practices.
<br />
<br />
Additionally, I will make every reasonable effort to inform you when I interact with third parties with your information; however, you are solely responsible for reviewing, understanding, and agreeing to or not agreeing to any third-party privacy policies.
<br />
<br />
<strong>Information I Collect</strong>
<br />
<br />
To fulfill your order, you must provide me with certain information (which you authorized Etsy to provide to me), such as your name, e-mail address, postal address, payment information, and the details of the product that you’re ordering. You may also choose to provide me with additional personal information from time to time if you contact me directly.
<br />
<br />
<strong>Why I Need Your Information and How I Use It</strong>
<br />
<br />
I collect, use and share your information in several legally-permissible ways, including:
<br />
<br />
&emsp; - As needed to provide my services, such as when I use your information to fulfill your order, to settle disputes, or to provide you with customer support; <br />
<br />
&emsp; -  When you have provided your affirmative consent, which you may revoke at any time, such as by signing up for my mailing list or to receive notifications from me; <br />
<br />
&emsp; - If necessary to comply with a court order or legal obligation, such as retaining information about your purchases if required by tax law; and <br />
<br />
&emsp; - As necessary for my own legitimate interests, if those legitimate interests are not overridden by your rights or interests, such as (a) providing and enhancing my services; (b) Compliance with the Etsy Seller Policy and Etsy Terms of Use;
${
  this.toggleMarketing
    ? "and (c) use of your e-mail address for remarketing on Facebook, Google or similar."
    : ""
}
<br />
<br />
<strong>Information Sharing and Disclosure</strong>
<br />
<br />
Protecting my customers’ personal information is crucially important to my business and something I take very seriously. For these reasons, I share your personal information only for very limited reasons and in limited circumstances, as follows:
<br />
<br />
&emsp; - With Etsy. I share your information with Etsy as necessary to provide you my services and comply with my obligations under both the Etsy Seller Policy and Etsy Terms of Use;
<br />
<br />
&emsp; - With Third-Party Service Providers. I engage the following trusted third parties to perform functions and provider services to my shop:
<br />
<br />
${
        this.googleAnalytics
          ? "Google Analytics, which helps me understand how visitors browse " +
            this.etsyShopName +
            ". You can read more about how Google uses your Personal Information here: https://www.google.com/intl/en/policies/privacy/. You can also opt-out of Google Analytics here:  https://tools.google.com/dlpage/gaoptout."
          : ""
      }
<br />
${
        this.thirdPartyName[0].value
          ? [...this.thirdPartyName]
              .map(
                (element, index) =>
                  element.value +
                  ", " +
                  this.thirdPartyService[index].value
              )
              .join("<br/>")
          : ""
      }
<br />
<br />
&emsp; I share you personal information with these third parties, but only to the extent necessary to perform these services;
<br />
<br />
&emsp; - In the Event of a Business Transfer. If I sell or merge my business, I may disclose your information as part of that transaction, only to the extent permitted by law.
<br />
<br />
&emsp; - In Compliance with Laws. I may collect, use, retain, and share your information if I have a good faith belief that doing so is reasonably necessary to: (a) respond to legal process or to government requests; (b) perform legal obligations to which I am bound by agreements; (c) prevent, investigate, and address fraud and other illegal activity, security, or technical issues; or (d) protect the rights, property, and safety of my customers, or others.
<br />
<br />
<strong>How Long I Store Your Information</strong>
<br />
<br />
I retain your personal information only for as long as necessary to provide you with my services and as otherwise described in my Privacy Policy. However, I may also be required to retain this information to comply with my legal and regulatory obligations, to resolve disputes, and to enforce or perform under my agreements. I generally keep your data for the following time period: five (5) years.
<br />
<br />
<strong>Transfers of Personal Information Outside the EU</strong>
<br />
<br />
I may store and process your information through third-party hosting services in the US and other jurisdictions. As a result, I may transfer your personal information to a jurisdiction with different data protection and government surveillance laws than your jurisdiction has. If I am required to transfer information about you outside of the EU, I rely on Privacy Shield as the legal basis for the transfer, as Google Cloud is Privacy Shield certified.
<br />
<br />
<strong>Your Rights</strong>
<br />
<br />
If you reside in certain territories, including the EU, you have a number of rights in relation to your personal information. While some of these rights apply generally, certain rights apply only in certain limited cases. Your rights are as follows:
<br />
<br />
&emsp; - Right to Access. You may have the right to access and receive a copy of the personal information I hold about you by contacting me using the contact information below.
<br />
<br />
&emsp; - Right to Change, Restrict, or Delete. You may also have rights to change, restrict my use of, or delete your personal information. Absent exceptional circumstances (such as where I am required to store information for legal reasons) I will generally delete your personal information upon your request.
<br />
<br />
&emsp; - Right to Object. You can object to (a) my processing of some of your information based on my legitimate interests and (b) receiving marketing messages from me.  In such cases, I will delete your personal information unless I have compelling and legitimate grounds to continue storing and using your information or if it is needed for legal reasons.
<br />
<br />
&emsp; - Right to Complain. If you reside in the EU and wish to raise a concern about my use of your information (and without prejudice to any other rights you may have), you have the right to do so with your local data protection authority.
<br />
<br />
<strong>How to Contact Me</strong>
<br />
<br />
You may reach me with any concerns relating to privacy at ${
        this.contactEmail
      } ${
        this.business
          ? ", or by mail at my physical address " +
            this.businessAddress +
            " addressed to " +
            this.businessName
          : ""
      }.
<br />
<br />
${
  this.toggleEu
    ? "For purposes of EU data protection law, I, " +
      this.dataController +
      ", am the data controller of your personal information. If you have any questions or concerns, you may contact me at " +
      this.dataControllerContact +
      "."
    : ""
}
</div>`;
    }
  }

  const policyMakerClass = new PolicyMaker();
  policyMakerClass;
};

policyMaker();
