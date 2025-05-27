---
id: quick-start
title: Quick start
---

<span style={{ color: '#2e86c1' }}>
# Quick Start 
</span>

<span style={{ color: '#2e86c1' }}>
Get your Smart-Reception template running in minutes.  
</span>

<span style={{ color: '#1b4f72' }}>
## A) If you already have an Assistant 
</span>

## 1. Gather Your Vapi Credentials  
- **Org ID**: found under **Vapi Dashboard → Org Settings (on the left panel) > Org Settings**  
- **Private Key**: found under **Vapi Dashboard → Build (on the left panel) > Vapi API Keys** generate or copy from the same screen  
- Keep both values handy.
  <img src="/img/vap.jpg"
  alt = "Vapi Dashboard screenshot"
  class="zoomable"
  style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }}
    
    />

## 2. Configure Your Bubble App  
1. Log in to your app account and go to **Settings section → Vapi Account**.  
2. Paste your **Org ID** and **Private Key** into the respective fields (section Settings) > Vapi Account.  
3. Save.
4. Verify your *Organization ID* in the input field.
5. Click on **'Show Private Key'** button to verify the private key.


  <img src="/img/set.jpg"
  alt = "Smart-Reception Dashboard Settings section screenshot"
  class="zoomable"
  style= {{
      width: '100%',
      maxWidth: '800px',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }}
    
    />

## 3. Set Your Assistant Webhook  

- On your Backend Workflow click on 'vapi_webhook' 

<figure>
  <img src="/img/webhook.jpg"
  alt = "Smart-Reception Dashboard screenshot"
  class="zoomable"
     style= {{
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>
 
 Then click on 'Detect Data'

 <figure>
  <img src="/img/webhook-init.jpg"
  alt = "Smart-Reception Dashboard screenshot"
     style= {{
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

2. Copy adress URL

3. In the Vapi console under **Assistants → [Your Assistant] → Advanced → Messaging → Server Settings → Server URL**, paste your **Bubble app's API workflow URL** here (red on image):
<span style={{ color: '#2e86c1' }}>
- Linking your assistant to the Bubble webhook is like plugging your phone into the wall—it lets every call event flow instantly into your app. This real-time connection powers live logs, transcripts, and dashboards so you never miss a single ring. 
</span>

<figure>
  <img src="/img/vapi.jpg"
  alt = "Smart-Reception Dashboard screenshot"
  class="zoomable"
     style= {{
      width: '100%',
      maxWidth: '100%',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

<span style={{ color: '#2e86c1' }}>
-  This ensures every call event (start, utterance, end) posts back to your Bubble app.
</span>

<span style={{ color: '#1b4f72' }}>
## A) If you don't yet have an Assistant
</span>

## 1. If you have no Assistant - Create Your First Assistant  
1. In Vapi: **Assistants → Create Assistant**  

<img src="/img/create-assistant.jpg"
  alt = "Smart-Reception Dashboard screenshot"
  class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />

2. Choose a voice model etc. 

<img src="/img/vapi01.jpg"
  alt = "Smart-Reception Dashboard screenshot"
  class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />

3. Paste your **Bubble app’s API workflow URL** here.

<span style={{ color: '#2e86c1' }}>
- Linking your assistant to the Bubble webhook is like plugging your phone into the wall—it lets every call event flow instantly into your app. This real-time connection powers live logs, transcripts, and dashboards so you never miss a single ring. 
</span>
 

<img src="/img/vapi.jpg"
  alt = "Smart-Reception Dashboard screenshot"
  class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />

4. Save (click on 'Publish' at the top right) – it appears in **Dashboard → Assistant**.

<img src="/img/vapi02.jpg"
  alt = "Smart-Reception Dashboard screenshot"
  class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />


## 2. Import or Bring Your Phone Number  
1. In Vapi: **Phone Numbers → Create Phone Number** (or **BYO**)  

<figure>
  <img src="/img/phone.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

3. You’ll see it under **Home → Phone Numbers**.

<figure>
  <img src="/img/vapi03.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

## 3. Now you have an Assistant with your webhook app URL attached and your phone number

<figure>
  <img src="/img/vapi04.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

## 4. Place a Test Call  
1. Go to **Dashboard → Schedule**  
2. Define your number to call **(+(country code)(number))**, and the others inputs.  
3. Click **Call Now**. 

<figure>
  <img src="/img/vapi05.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

4. Your call must be see in Section **Call** > **Application Call**.

<figure>
  <img src="/img/vapi06.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

5. Very on your database (Data > App data > All Calls) you must see the call informations.

<figure>
  <img src="/img/vapi07.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

<span style={{ color: '#2e86c1' }}>
- ✅ Note: Very brief calls (under the minimum duration) will not generate a summary (yellow part in the image).
</span>

## ⚠️ Only when you can see the call informations in your database or your dashboard
**Last Steps**
1. Go to your Vapi account and select the Assistant you passed your webhook url.
2. Remove the initialise at the end of the URL > **/initialize** (strictly).

<figure>
  <img src="/img/vapi08.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

3. Save (click on 'Publish' at the top right)

<figure>
  <img src="/img/vapi02.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

4. Make a call to test.

<figure>
  <img src="/img/vapi05.jpg"
  alt = "Smart-Reception Dashboard screenshot"
   class="zoomable"
     style= {{
      width: 'auto',
      maxWidth: 'auto',
      height: 'auto',
      display: 'block',
      margin: '0 auto',
    }} />
</figure>

5. You’re all set! 😎

## Need help? 

If you run into any issues, please reach me out at lesly.davilmar@frenchvox.fr.