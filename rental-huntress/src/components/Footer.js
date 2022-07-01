import {SocialMediaIconsReact} from 'social-media-icons-react';
const Footer = () => {
    return(
        <div style={{float: "left"}}>
            <h3>Rental Huntress</h3>
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="#fc3468" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="25" />
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="linkedin" iconColor="rgba(255,255,255,1)" backgroundColor="#fc3468" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="25" />
            <SocialMediaIconsReact className="social-icon" borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="#fc3468" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="25" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(252,52,104,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="25" />
            <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="3" borderStyle="solid" icon="youtube-play" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(252,52,104,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="25" />
        </div>
    );
}
export default Footer;