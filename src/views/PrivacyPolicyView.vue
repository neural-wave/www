<template>
    <div class="flex flex-col items-center m-[50px] sm:m-[100px] gap-16">
        <span class="text-3xl text-center">Privacy Policy</span>

        <p class="text-justify">
            We use Umami to understand how our website is used. Umami is a privacy-oriented analytics
            service provided by Umami Software, Inc., 1362 42nd Ave., San Francisco, CA 94122, USA. The
            data from our website is processed and stored on servers located in the European Union.
            <br /><br />
            Umami does not set cookies and does not store any personal identifiers on your device. No
            cross-site tracking takes place and individual visitors cannot be identified.
            <br /><br />
            When you visit a page, the following information is recorded: the URL of the page visited,
            the referring page, your browser, operating system and device type, screen size, language
            setting, and an approximate location at country [and region] level. Your IP address is used
            only momentarily to determine the country and is not stored. To count returning visits
            within a session, an anonymous hash is calculated from the website ID, the domain, your
            browser's user agent and a randomly generated value that changes regularly; this value
            cannot be traced back to you and cannot be reversed.
            <br /><br />
            We process this data on the basis of our overriding interest in measuring reach and
            improving our website (Art. 31 para. 1 and para. 2 revFADP; for visitors from the EU, Art. 6
            para. 1 lit. f GDPR). Umami Software, Inc. acts as our processor under a data processing
            agreement.
            <br /><br />
            The data is retained for 6 months and is then deleted.
            <br /><br />
            <strong>Objecting to analytics:</strong> You can prevent this collection at any time by
            clicking the button below. Our analytics also respects the "Do Not Track" setting in your
            browser; if you activate it, no data will be recorded. You may also block the analytics
            script using a browser extension or content blocker. <br /><br />
            Further information on Umami's data processing is available at
            <a href="https://www.umami.is" class="underline">umami.is</a>.
        </p>

        <button
            v-if="!isNotTracking()"
            @click="rmTracking()"
            id="dnt"
            class="bg-white text-black pt-3 pb-3 pl-5 pr-5 rounded-full"
        >
            Do not track
        </button>

        <button
            v-else
            @click="rmTracking()"
            id="dnt"
            class="bg-white text-black pt-3 pb-3 pl-5 pr-5 rounded-full"
        >
            ✓ Not Tracking
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: "PrivacyPolicyView",
    methods: {
        rmTracking() {
            localStorage.setItem("umami.disabled", "1");
            document.getElementById("dnt")!.innerText = "✓ Done";
        },
        isNotTracking() {
            return localStorage.getItem("umami.disabled") == "1";
        },
    },
};
</script>
