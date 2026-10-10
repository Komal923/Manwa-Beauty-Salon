import {waLink,whatsappMessages} from "../lib/data";
export default function WhatsAppButton({message=whatsappMessages.appointment,children="WhatsApp Us",className="btn gold",floating=false}){
return<a className={floating?"wa wa-float":"wa-cta "+className} href={waLink(floating?whatsappMessages.services:message)} aria-label={floating?"Chat with Manwa on WhatsApp":undefined} title={floating?"Chat with Manwa":undefined} target="_blank" rel="noopener noreferrer">
<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path fill="currentColor" d="M16 3.2a12.7 12.7 0 0 0-10.9 19.2L3.4 28.8l6.6-1.7A12.8 12.8 0 1 0 16 3.2Zm0 23.2c-1.9 0-3.7-.5-5.3-1.5l-.4-.2-3.9 1 1-3.8-.3-.4a10.4 10.4 0 1 1 8.9 4.9Zm5.7-7.8c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.6-1.8-1.8-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6s-.7-1.7-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6s1.1 3 1.2 3.2c.2.2 2.2 3.4 5.3 4.7.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4Z"/></svg>
{!floating&&<span>{children}</span>}
</a>
}
