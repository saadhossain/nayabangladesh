import {
    FacebookIcon,
    FacebookMessengerIcon,
    LinkedinIcon,
    PinterestIcon,
    TelegramIcon,
    WhatsappIcon,
    XIcon
} from "react-share";

const SocialShareBtns = () => {
    return (
        <div className='flex items-center gap-2 mb-2'>
            <h4 className='border-l-4 border-secondary pl-2 text-lg font-semibold'>সোশ্যাল মিডিয়ায় শেয়ার করুনঃ</h4>
            <FacebookIcon size={32} round={true} />
            <FacebookMessengerIcon size={32} round={true} />
            <XIcon size={32} round={true} />
            <WhatsappIcon size={32} round={true} />
            <LinkedinIcon size={32} round={true} />
            <PinterestIcon size={32} round={true} />
            <TelegramIcon size={32} round={true} />
        </div>
    )
}

export default SocialShareBtns