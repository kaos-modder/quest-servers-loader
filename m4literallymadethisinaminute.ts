declare const Il2Cpp: any;
declare const console: any;

Il2Cpp.perform(() => {
    const AppUtils = Il2Cpp
        .domain
        .assembly("AnimalCompany")
        .image
        .class("AnimalCompany.AppUtils");

    const method = AppUtils.method("CalculatePhotonAppVersion");

    console.log("you're welcome 444 users");

    method.implementation = function () {
        const spoofed = "5M8b0P9cmf0LCq5oFxWy";

        console.log(
            `it worked, join discord.gg/t444 if you aren't in it already.`
        );

        return Il2Cpp.string(spoofed);
    };
});