import { Navigation } from '@/components/Navigation/Navigation';
import { Pages } from '@/types';
import AnimateOnScroll from '@/util/AnimateOnScroll';

export default function Privacy() {
  return (
    <>
      <Navigation page={Pages.privacy} />
      <div className="container mx-auto pt-32 pb-40 px-4 text-azure-200">
        <AnimateOnScroll>
          <h1 className="pb-24 text-5xl font-bold bg-gradient-to-r from-azure to-palatinate_blue-400 text-transparent bg-clip-text">
            Privacy Policy
          </h1>
        </AnimateOnScroll>
        <p className="mb-4">
          At TW Software Solutions LLC, accessible from
          https://tobiaswupperfeld.com, one of our main priorities is the
          privacy of our visitors. This Privacy Policy document contains types
          of information that is collected and recorded by TW Software Solutions
          LLC and how we use it.
        </p>
        <p className="mb-4">
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
        <h2 className="mb-2 text-2xl">Log Files</h2>
        <p className="mb-4">
          TW Software Solutions LLC follows a standard procedure of using log
          files. These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services&apos; analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users&apos; movement on the website,
          and gathering demographic information.
        </p>
        <h2 className="mb-2 text-2xl">Cookies and Web Beacons</h2>
        <p className="mb-4">
          Like any other website, TW Software Solutions LLC uses
          &quot;cookies&quot;. These cookies are used to store information
          including visitors&apos; preferences, and the pages on the website
          that the visitor accessed or visited. The information is used to
          optimize the users&apos; experience by customizing our web page
          content based on visitors&apos; browser type and/or other information.
        </p>
        <h2 className="mb-2 text-2xl">Google DoubleClick DART Cookie</h2>
        <p className="mb-4">
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL:{' '}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </p>
        <h2 className="mb-2 text-2xl">Our Advertising Partners</h2>
        <p className="mb-4">
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
        </p>
        <ul className="mb-4 pl-4">
          <li>
            <p>Google</p>
            <p>
              <a href="https://policies.google.com/technologies/ads">
                https://policies.google.com/technologies/ads
              </a>
            </p>
          </li>
        </ul>
        <h2 className="mb-2 text-2xl">Privacy Policies</h2>
        <p className="mb-4">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of TW Software Solutions LLC.
        </p>
        <p className="mb-4">
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on TW Software Solutions LLC,
          which are sent directly to users&apos; browser. They automatically
          receive your IP address when this occurs. These technologies are used
          to measure the effectiveness of their advertising campaigns and/or to
          personalize the advertising content that you see on websites that you
          visit.
        </p>
        <p className="mb-4">
          Note that TW Software Solutions LLC has no access to or control over
          these cookies that are used by third-party advertisers.
        </p>
        <h2 className="mb-2 text-2xl">Third Party Privacy Policies</h2>
        <p className="mb-4">
          TW Software Solutions LLC&apos;s Privacy Policy does not apply to
          other advertisers or websites. Thus, we are advising you to consult
          the respective Privacy Policies of these third-party ad servers for
          more detailed information. It may include their practices and
          instructions about how to opt-out of certain options.
        </p>
        <p className="mb-4">
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers&apos;
          respective websites.
        </p>
        <h2 className="mb-2 text-2xl">Children&apos;s Information</h2>
        <p className="mb-4">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p className="mb-4">
          TW Software Solutions LLC does not knowingly collect any Personal
          Identifiable Information from children under the age of 13. If you
          think that your child provided this kind of information on our
          website, we strongly encourage you to contact us immediately and we
          will do our best efforts to promptly remove such information from our
          records.
        </p>
        <h2 className="mb-2 text-2xl">Online Privacy Policy Only</h2>
        <p className="mb-4">
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in TW Software Solutions LLC. This policy is not
          applicable to any information collected offline or via channels other
          than this website.
        </p>
        <h2 className="mb-2 text-2xl">Consent</h2>
        <p>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its Terms and Conditions.
        </p>
      </div>
    </>
  );
}
