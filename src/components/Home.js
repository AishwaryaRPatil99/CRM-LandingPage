import React from "react";
import Navbar from "./Navbar";
import Logo from "../Images/Logoimage.jpg";
import ImageA from "../Images/th (1).jpg";
import ImageB from "../Images/th (2).jpg";
import ImageC from "../Images/th.jpg";
import Imagepart2a from "../Images/th (7).jpg";
import Imagepart2b from "../Images/th (5).jpg";
import Imagepart2c from "../Images/th (6).jpg";
import Imagepart2d from "../Images/mobile-security.jpg";
import LaptopView from "../Images/screen.jpg";
import TabletView from "../Images/th (16).jpg";
import MobileView from "../Images/th (15).jpg";
import Spotifylogo from "../Images/spotify.jpg";
import Micrologo from "../Images/microsoft.jpg";
import Mcafeelogo from "../Images/mcafee.jpg";
import Salesforcelogo from "../Images/salesforce.jpg";
import Hubspotlogo from "../Images/hubspot.jpg";
import Loomlogo from "../Images/loom.jpg";
import Netflixlogo from "../Images/netflix.jpg";
import Livelogo from "../Images/livechat.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import FilterTiltShiftIcon from "@mui/icons-material/FilterTiltShift";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { FiArrowRight } from "react-icons/fi";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="part1">
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary-heading">
              Say goodbye to the stress of forgotten passwords and the fear of
              data breaches
            </h1>
            <p className="primary-text">
              Say goodbye to the stress of forgotten passwords and the fear of
              data breaches. Our password manager is designed to keep our
              digital life safe and secure, while simplifying the process of
              password management.
            </p>
            <div className="btns">
              <button className="secondary-button">
                Try WebGuard Now
                <span className="icon">
                  <FilterTiltShiftIcon />{" "}
                </span>
              </button>
              <button className="third-button">
                Learn more
                <span className="icon">
                  <FiArrowRight />{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="header-images-container">
          <span className="image-a">
            <img src={ImageA} alt="" />
          </span>
          <span className="image-b">
            <img src={ImageB} alt="" />
          </span>
          <span className="image-c">
            <img src={ImageC} alt="" />
          </span>
        </div>
      </div>
      <div className="part2">
        <h1 className="primary-headings">
          Automate the management of all your passwords with our auto-pilot
          feature
        </h1>
        <p className="primary-texts">
          Welcome to our password management platform, where you can put your
          password management on auto-pilot. With our auto-pilot feature, you
          can effortlessly manage all of your passwords in one place.
        </p>
        <div className="sub">
          <div className="suba">
            <div className="subax">
              <div className="top">
                <h3>Log in and go</h3>
                <p>
                  Once you save a password in WebGuard, you'll always have it
                  when you need it logging in is fast and easy
                </p>
              </div>
              <img src={Imagepart2a} alt="" />
            </div>
            <div className="subay">
              <div className="top">
                <h3>Dark web monitoring</h3>
                <p>
                  Stop worrying about data breaches. Get alerts if your personal
                  information is at risk.
                </p>
              </div>
              <img src={Imagepart2b} alt="" />
            </div>
          </div>
          <div className="subb">
            <div className="subbx">
              <div className="top">
                <h3>Two-factor authentication</h3>
                <p>
                  Easily identify websites where you can turn on two-factor
                  WebGuard as an authenticator.
                </p>
              </div>
              <img src={Imagepart2c} alt="" />
            </div>
            <div className="subby">
              <div className="top">
                <h3>Passwordless login</h3>
                <p>
                  Gain instant access to your WebGuard Authenticator instead of
                  your master password.
                </p>
              </div>
              <img src={Imagepart2d} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="part3">
        <h1 className="primary-headings">
          Experience a sense of calm and security no matter where you are with
          WebGuard.
        </h1>
        <p className="primary-texts">
          Our platform users advanced encryption and other security measures to
          protect your sensitive data from online threats, ensuring that you can
          enjoy browsing the internet without any worries. Whether you're at
          home, at work, or on-the-go.
        </p>
        <div className="laptop-view">
          <h3>The ultimate password protection</h3>
          <img src={LaptopView} alt="" />
        </div>
        <div className="views">
          <div className="tablet-view">
            <h3>Efficient on tablet</h3>
            <img src={TabletView} alt="" />
          </div>
          <div className="mobile-view">
            <h3>Secure your password</h3>
            <img src={MobileView} alt="" />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div className="part4">
        <h1 className="primary-heading">
          Find the perfect subscription to meet your unique requirements.
        </h1>
        <p className="primary-text">
          Looking for a subscription that fits your unique needs? Look no
          further. With our platform, you can find the perfect subscription plan
          that caters to your specific requirements.
        </p>
        <div className="part4-sub1">
          <div className="part4-suba">
            <div className="dside">
              <span className="icons">
                <FiberManualRecordIcon />
              </span>
              <div className="side">
                <p>For Individuals</p>
                <h3>Individual Starter Pack</h3>
              </div>
            </div>
            <p>
              Password management for one type of device that is easy to use and
              is reliable, secure, and easy to use.
            </p>
            <p>
              <span class="price">$12</span>/month
            </p>
            <button className="secondary-button">
              Get Started
              <span className="icon">
                <CallMadeIcon />
              </span>
            </button>
          </div>
          <div className="part4-subb">
            <h2>What's included</h2>
            <div className="subx">
              <div className="icons-partx">
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Unlimited Passwords
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  1 User Accounts
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Access on 1 Device Type
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Save and Autofill Passwords
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  One-to-One Sharing
                </h5>
              </div>
              <div className="icons-party">
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Password Generator
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Security Dashboard
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Dark Web Monitoring
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Passwordless Login
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="part4-sub2">
          <div className="part4-suba">
            <div className="dside">
              <span className="icons">
                <WorkspacesIcon />
              </span>
              <div className="side">
                <p>For Enterprise</p>
                <h3>Enterprise Starter Pack</h3>
              </div>
            </div>
            <p>
              A full range of business features as well as services customized
              to your large business needs.
            </p>
            <p>
              <span class="price">$94</span>/month
            </p>
            <button className="secondary-button">
              Get Started
              <span className="icon">
                <CallMadeIcon />
              </span>
            </button>
          </div>
          <div className="part4-subd">
            <h2>What's included</h2>
            <div className="subx">
              <div className="icons-partx">
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Unlimited Passwords
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  50 User Account
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Access Across ALl Devices
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  1 GB Encrypted File Storage
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  One-to-Many Sharing
                </h5>
              </div>
              <div className="icons-party">
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Password Generator
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Security Dashboard
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Dark Web Monitoring
                </h5>
                <h5>
                  <span className="icon">
                    <CheckCircleIcon />
                  </span>
                  Passwordless Login
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="part4-footer">
        <div className="part4-footerA">
          <h3>Get to know about all product's pricing</h3>
          <p>
            Our platform offers a range of subscription plans that are tailored
            to your unique requirements, allowing you to find the perfect fit
            for you
          </p>
        </div>
        <div className="part4-footerB">
          <button className="secondary-button">
            see more pricing
            <span className="icon">
              <CallMadeIcon />
            </span>
          </button>
        </div>
      </div>

      <div className="part5">
        <h1 className="primary-heading">
          Be a part of the satisfied WebGuard users today and hear firsthand
          what our customers are saying about us!
        </h1>
        <p className="primary-text">
          Join the satisfied commmunity of WebGuard users today and discover why
          our customers rave about our services! Hear firsthand what they have
          to say and experience the peace of mind that comes with top-notch
          online security.
        </p>
        <div className="part5-screen">
          <div className="author">
            <h1>
              This password manager is hands down the best on the market. It's
              easy to use, affordable, and has saved me from the headache of
              managing my passwords on my own
            </h1>
            <div className="part5-screen-author">
              <h6>Aishwarya Patil</h6>
              <p>UI/UX Designer and Developer at CreativeWorks</p>
            </div>
          </div>
          <div className="part5-icons">
            <div className="logo-parta">
              <img src={Spotifylogo} alt="" />
              <img src={Micrologo} alt="" />
              <img src={Mcafeelogo} alt="" />
              <img src={Salesforcelogo} alt="" />
            </div>
            <div className="logo-partb">
              <img src={Hubspotlogo} alt="" />
              <img src={Loomlogo} alt="" />
              <img src={Netflixlogo} alt="" />
              <img src={Livelogo} alt="" />
            </div>
          </div>
          <div className="bottom-grid">
            <div className="grid1">
              <h1 className="primary-heading">
                Experience a sense of calm and security no matter where you are
                with WebGuard.
              </h1>
              <p className="primary-text">
                Our platform uses advanced encryption and other security
                measures to protect your sensitive data from online threats,
                ensuring that you can enjoy browsing the internet without any
                worries.
              </p>
              <div className="btns">
                <button className="third-button">
                  Try WebGuard Now
                  <span className="icon">
                    <FilterTiltShiftIcon />{" "}
                  </span>
                </button>
                <button className="secondary-button">
                  Learn more
                  <span className="icon">
                    {" "}
                    <FiArrowRight />{" "}
                  </span>
                </button>
              </div>
            </div>
            <div className="grid2">
              <img src={LaptopView} alt="" />
            </div>
          </div>
          <div className="crm-footer">
            <div className="crm-footer1">
              <div className="nav-logo-container">
                <img src={Logo} alt="" />
                <div className="app-title">
                  <h3>WebGuard</h3>
                </div>
              </div>
              <p>
                Discover the full scope of our services and see how we can help
                you.
              </p>
            </div>
            <div className="crm-footers">
              <ul>
                <li>Products</li>
                <li>Communication</li>
                <li>Remote Access</li>
                <li>View All Products</li>
              </ul>
            </div>
            <div className="crm-footers">
              <ul>
                <li>Company</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>Newsroom</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="crm-footers">
              <ul>
                <li>Features</li>
                <li>Autofill</li>
                <li>Password Vault</li>
                <li>Digital Wallet</li>
                <li>Password Manager</li>
                <li>Dark Monitoring</li>
                <li>Authenticator</li>
              </ul>
            </div>
            <div className="crm-footers">
              <li>Resources</li>
              <li>My Account</li>
              <li>Support</li>
              <li>Blog</li>
              <li>Partners</li>
              <li>Community</li>
              <li>Privacy POlicy</li>
            </div>
          </div>
          <div className="crm-footerx">
            <span className="crm-copy">
              {" "}
              <p>@ 2023 WebGuard. All rights reserved.</p>
            </span>
            <div className="crm-icons">
              <span className="icon">
                {" "}
                <TwitterIcon />
              </span>
              <span className="icon">
                {" "}
                <LinkedInIcon />
              </span>
              <span className="icon">
                {" "}
                <FacebookIcon />
              </span>
              <span className="icon">
                {" "}
                <GitHubIcon />
              </span>
              <span className="icon">
                {" "}
                <InstagramIcon />
              </span>
              <span className="icon">
                {" "}
                <LanguageIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
