declare const Il2Cpp: any;
declare const console: any;

Il2Cpp.perform(() => {
    const AppUtils = Il2Cpp
        .domain
        .assembly("AnimalCompany")
        .image
        .class("AnimalCompany.AppUtils");

    const method = AppUtils.method("CalculatePhotonAppVersion");

    console.log("UPDATED 444 QUEST SERVERS BY NOTEXTURE");

    method.implementation = function () {
        const spoofed = "gDg7wnpaBZar73JdGcU4";

        console.log(
            `AC IS FUCKED`
        );

        return Il2Cpp.string(spoofed);
    };
});