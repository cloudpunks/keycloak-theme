import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BiJIaZdE.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{a as r,o as i}from"./typeGuard-DKaxAAjC.js";import{a,d as o,f as s,o as c}from"./ThemeProvider-CPIBsxnA.js";import{Tt as l,a as u,dt as d,f,i as p,lt as m,n as h,p as g,t as _,ut as v,wt as y}from"./Template-DKCkfxTf.js";import{n as b,t as x}from"./checkbox-4n0SyAfV.js";import{n as S,t as C}from"./label-DgzMnPx3.js";import{n as w,t as T}from"./LogoutOtherSessions-BIRiT_ca.js";import{n as E}from"./waitForElementMountedOnDom-CNMY7lhT.js";var D,O;function k(){return(k=e((()=>{l(),D={name:`copy`,size:24,node:[[`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`,key:`17jyea`}],[`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,key:`zix9uf`}]]},D.node,O=y(D)})))()}var A,j;function M(){return(M=e((()=>{l(),A={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]},A.node,j=y(A)})))()}var N,P;function F(){return(F=e((()=>{l(),N={name:`printer`,size:24,node:[[`path`,{d:`M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,key:`143wyd`}],[`path`,{d:`M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`,key:`1itne7`}],[`rect`,{x:`6`,y:`14`,width:`12`,height:`8`,rx:`1`,key:`1ue0tg`}]]},N.node,P=y(N)})))()}function I(e){let{olRecoveryCodesListId:t}=e,{msgStr:n,isFetchingTranslations:r}=c(),{insertScriptTags:i}=u({effectId:`LoginRecoveryAuthnCodeConfig`,scriptTags:[{type:`text/javascript`,textContent:()=>`

                    /* copy recovery codes  */
                    function copyRecoveryCodes() {
                        var tmpTextarea = document.createElement("textarea");
                        var codes = document.querySelectorAll("#${t} li");
                        for (i = 0; i < codes.length; i++) {
                            tmpTextarea.value = tmpTextarea.value + codes[i].innerText + "\\n";
                        }
                        document.body.appendChild(tmpTextarea);
                        tmpTextarea.select();
                        document.execCommand("copy");
                        document.body.removeChild(tmpTextarea);
                    }

                    var copyButton = document.getElementById("copyRecoveryCodes");
                    copyButton && copyButton.addEventListener("click", function () {
                        copyRecoveryCodes();
                    });

                    /* download recovery codes  */
                    function formatCurrentDateTime() {
                        var dt = new Date();
                        var options = {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            timeZoneName: 'short'
                        };

                        return dt.toLocaleString('en-US', options);
                    }

                    function parseRecoveryCodeList() {
                        var recoveryCodes = document.querySelectorAll("#${t} li");
                        var recoveryCodeList = "";

                        for (var i = 0; i < recoveryCodes.length; i++) {
                            var recoveryCodeLiElement = recoveryCodes[i].innerText;
                            recoveryCodeList += recoveryCodeLiElement + "\\r\\n";
                        }

                        return recoveryCodeList;
                    }

                    function buildDownloadContent() {
                        var recoveryCodeList = parseRecoveryCodeList();
                        var dt = new Date();
                        var options = {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            timeZoneName: 'short'
                        };

                        return fileBodyContent =
                            ${JSON.stringify(n(`recovery-codes-download-file-header`))} + "\\n\\n" +
                            recoveryCodeList + "\\n" +
                            ${JSON.stringify(n(`recovery-codes-download-file-description`))} + "\\n\\n" +
                            ${JSON.stringify(n(`recovery-codes-download-file-date`))} + " " + formatCurrentDateTime();
                    }

                    function setUpDownloadLinkAndDownload(filename, text) {
                        var el = document.createElement('a');
                        el.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
                        el.setAttribute('download', filename);
                        el.style.display = 'none';
                        document.body.appendChild(el);
                        el.click();
                        document.body.removeChild(el);
                    }

                    function downloadRecoveryCodes() {
                        setUpDownloadLinkAndDownload('kc-download-recovery-codes.txt', buildDownloadContent());
                    }

                    var downloadButton = document.getElementById("downloadRecoveryCodes");
                    downloadButton && downloadButton.addEventListener("click", downloadRecoveryCodes);

                    /* print recovery codes */
                    function buildPrintContent() {
                        var recoveryCodeListHTML = document.getElementById('${t}').innerHTML;
                        var styles =
                            \`@page { size: auto;  margin-top: 0; }
                            body { width: 480px; }
                            div { list-style-type: none; font-family: monospace }
                            p:first-of-type { margin-top: 48px }\`;

                        return printFileContent =
                            "<html><style>" + styles + "</style><body>" +
                            "<title>kc-download-recovery-codes</title>" +
                            "<p>" + ${JSON.stringify(n(`recovery-codes-download-file-header`))} + "</p>" +
                            "<div>" + recoveryCodeListHTML + "</div>" +
                            "<p>" + ${JSON.stringify(n(`recovery-codes-download-file-description`))} + "</p>" +
                            "<p>" + ${JSON.stringify(n(`recovery-codes-download-file-date`))} + " " + formatCurrentDateTime() + "</p>" +
                            "</body></html>";
                    }

                    function printRecoveryCodes() {
                        var w = window.open();
                        w.document.write(buildPrintContent());
                        w.print();
                        w.close();
                    }

                    var printButton = document.getElementById("printRecoveryCodes");
                    printButton && printButton.addEventListener("click", printRecoveryCodes);
                `}]});(0,L.useEffect)(()=>{r||(async()=>{await E({elementId:t}),i()})()},[r])}var L;function R(){return(R=e((()=>{p(),L=t(),a()})))()}function z(){let{kcContext:e}=s();r(e.pageId===`login-recovery-authn-code-config.ftl`);let{recoveryAuthnCodesConfigBean:t,isAppInitiatedAction:n}=e,{msg:i,msgStr:a}=c(),o=`kc-recovery-codes-list`;return I({olRecoveryCodesListId:o}),(0,B.jsx)(h,{headerNode:i(`recovery-code-config-header`),children:(0,B.jsxs)(`div`,{className:`space-y-6`,children:[(0,B.jsx)(m,{variant:`warning`,children:(0,B.jsx)(v,{children:(0,B.jsxs)(`div`,{className:`space-y-2`,children:[(0,B.jsx)(`h4`,{className:`font-medium`,children:i(`recovery-code-config-warning-title`)}),(0,B.jsx)(`p`,{className:`text-sm`,children:i(`recovery-code-config-warning-message`)})]})})}),(0,B.jsx)(`div`,{className:`bg-muted/50 rounded-lg p-4`,children:(0,B.jsx)(`ol`,{id:o,className:`grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-sm`,children:t.generatedRecoveryAuthnCodesList.map((e,t)=>(0,B.jsxs)(`li`,{className:`flex items-center space-x-2`,children:[(0,B.jsxs)(`span`,{className:`text-muted-foreground min-w-8`,children:[t+1,`:`]}),(0,B.jsxs)(`span`,{className:`font-medium`,children:[e.slice(0,4),`-`,e.slice(4,8),`-`,e.slice(8)]})]},t))})}),(0,B.jsxs)(`div`,{className:`flex flex-wrap  gap-2`,children:[(0,B.jsxs)(f,{id:`printRecoveryCodes`,variant:`outline`,size:`sm`,type:`button`,className:`flex items-center gap-2`,children:[(0,B.jsx)(P,{className:`w-4 h-4`}),i(`recovery-codes-print`)]}),(0,B.jsxs)(f,{id:`downloadRecoveryCodes`,variant:`outline`,size:`sm`,type:`button`,className:`flex items-center gap-2`,children:[(0,B.jsx)(j,{className:`w-4 h-4`}),i(`recovery-codes-download`)]}),(0,B.jsxs)(f,{id:`copyRecoveryCodes`,variant:`outline`,size:`sm`,type:`button`,className:`flex items-center gap-2`,children:[(0,B.jsx)(O,{className:`w-4 h-4`}),i(`recovery-codes-copy`)]})]}),(0,B.jsxs)(`div`,{className:`flex items-center space-x-2`,children:[(0,B.jsx)(x,{id:`kcRecoveryCodesConfirmationCheck`,name:`kcRecoveryCodesConfirmationCheck`,onCheckedChange:e=>{let t=document.getElementById(`saveRecoveryAuthnCodesBtn`);t&&(t.disabled=!e)}}),(0,B.jsx)(C,{htmlFor:`kcRecoveryCodesConfirmationCheck`,className:`text-sm font-medium cursor-pointer`,children:i(`recovery-codes-confirmation-message`)})]}),(0,B.jsxs)(`form`,{action:e.url.loginAction,className:`space-y-4`,id:`kc-recovery-codes-settings-form`,method:`post`,children:[(0,B.jsx)(`input`,{type:`hidden`,name:`generatedRecoveryAuthnCodes`,value:t.generatedRecoveryAuthnCodesAsString}),(0,B.jsx)(`input`,{type:`hidden`,name:`generatedAt`,value:t.generatedAt}),(0,B.jsx)(`input`,{type:`hidden`,id:`userLabel`,name:`userLabel`,value:a(`recovery-codes-label-default`)}),(0,B.jsx)(T,{}),n?(0,B.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-3`,children:[(0,B.jsx)(f,{type:`submit`,id:`saveRecoveryAuthnCodesBtn`,disabled:!0,className:`sm:flex-1`,children:a(`recovery-codes-action-complete`)}),(0,B.jsx)(f,{type:`submit`,variant:`outline`,name:`cancel-aia`,value:`true`,id:`cancelRecoveryAuthnCodesBtn`,className:`sm:flex-1`,children:i(`recovery-codes-action-cancel`)})]}):(0,B.jsx)(f,{type:`submit`,className:`w-full`,id:`saveRecoveryAuthnCodesBtn`,disabled:!0,children:a(`recovery-codes-action-complete`)})]})]})})}var B;function V(){return(V=e((()=>{d(),g(),b(),S(),w(),a(),o(),k(),M(),F(),i(),_(),R(),B=n(),z.__docgenInfo={description:``,methods:[],displayName:`Page`}})))()}var H;function U(){return(U=e((()=>{V(),H=z})))()}U();export{H as default};