var homePage = `  
<div class="lightBg p-5">
        <!-- section for sending message -->
        <div class="text-paste-wrapper mid-it">
          <div class="input-wrapper flex">
            <input
              id="msg"
              class="msssg"
              type="text"
              placeholder="Enter Message"
              required
            />
            <button class="mid-it paste" type="button">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4355/4355199.png"
                width="18px"
                height="18px"
              />
            </button>
            <div class="sendicon-wrapper mid-it btn">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1309/1309305.png"
                height="43px"
              />
            </div>
          </div>
        </div>

        <div class="ortext">OR</div>

        <!-- file send button -->
        <label>
          <div class="file-send-wrapper">
            <input
              type="file"
              style="display: none"
              onchange="transferData(this.files)"
            />
            <div class="choosefile-button" style="opacity: 1">Select File</div>
          </div>
        </label>

        <!-- filters for showing files/messages in different mods  -->
        <div class="connectedpage-three-icons-wrapper">
          <div id="all" class="icon-wrapper mid-it highlightedSelected all">
            All
          </div>
          <div id="mobile" class="icon-wrapper mid-it false mobile">Mobile</div>
          <div id="desktop" class="icon-wrapper mid-it false desktop">
            Laptop
          </div>
        </div>

        <!-- print screen area -->
        <div class="stuff-list-wrapper">
          <div class="title" style="color: rgb(0, 0, 0)">Recents</div>
          <div class="chat-messages"></div>
        </div>
      </div>`;

var indexPagePc = qrValue => `
<section class="newmain">
  <div class="container newmainDiv h-100">
    <div class="row vh-100">
      <div class="col-md-6 my-auto my-xs-0 col-xs-12">
        <div class="heroPic-div mx-auto mt-5 customFlex">
          <img class="newmainimg" src="./assets/images/mob.png" alt="Image Not Available" />
        </div>
      </div>
      <div class="col-md-6 my-auto my-xs-0 col-xs-12">
        <div class="heroPic-div mx-auto customFlex">
          <img class="img qrbox" src="https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${qrValue}" alt="Image Not Available" />
        </div>
      </div>
    </div>
  </div>
</section>
`;

var homeMessage = ({ message, file }) => {
  let x=bufferToUrl(file, message);
  return `<div class="each-stuff-wrapper">
<div class="text-item">
  <div class="data" style="color: rgb(0, 0, 0)">${message}</div>
  <!-- image div -->
  ${x ? `
  <a href="${x}" download="${message}">
  <button>
    <img height="20px" src="https://cdn-icons-png.flaticon.com/512/1092/1092004.png"/>
  </button>
  </a>
  ` : `
  <button onclick="getCopy('${message}')">
    <img height="20px" src="https://cdn-icons-png.flaticon.com/512/4355/4355195.png"/>
  </button>
  `}
  
</div><br>`}