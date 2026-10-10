import BookingForm from "../../components/BookingForm";
import PageHero from "../../components/PageHero";
import Photo from "../../components/Photo";
import WhatsAppButton from "../../components/WhatsAppButton";
import {whatsappMessages} from "../../lib/data";
export const metadata={title:"Book Appointment",description:"Book your appointment at Manwa Beauty Salon & Academy in Kamothe, Navi Mumbai."};
export default function Book(){return <><PageHero title="Book Appointment" description="Tell us what you need and we will confirm your slot." image="consultation"><WhatsAppButton message={whatsappMessages.appointment}>Book on WhatsApp</WhatsAppButton></PageHero><section><div className="wrap two-c booking-layout"><div><div className="big"><Photo k="skin" label="Relaxing facial care in a professional spa setting"/></div><h2 className="l booking-caption">Your time to unwind.</h2><p>From everyday care to a special occasion, let us help you find your next beauty ritual.</p></div><BookingForm/></div></section></>}
