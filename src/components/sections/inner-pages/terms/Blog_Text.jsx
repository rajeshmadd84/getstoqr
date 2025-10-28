import { Link } from 'react-router-dom';

const Blog_Text = () => {
  return (
    <article className='jos overflow-hidden bg-white'>
     
      {/* Blog Post Meta */}
     
      {/* Blog Post Meta */}
      <h4 className='mb-3 mt-5'>
        <strong>Preamble</strong>
      </h4>
      <p className='mb-7 last:mb-0'>
      Welcome to Logpilot (“Company,” “we,” “us,” or “our”). By accessing or using our software-as-a-service (SaaS) platform (the “Service”), you agree to comply with and be bound by these Terms of Service (“Terms”). 
      If you do not agree to these Terms, please do not use our Service.
      </p>
      <ul className='mb-7 flex flex-col gap-7 last:mb-0'>
        <li>
          <div className='font-semibold'>1. Acceptance of Terms</div>
          <p className='mb-7 last:mb-0'>
          By registering for, accessing, or using the Logpilot platform, you accept and agree to comply with these Terms. 
          These Terms apply to all users of the platform, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
          </p>
        </li>
        <li>
          <div className='font-semibold'>2. Description of Service</div>
          <p className='mb-7 last:mb-0'>
          Logpilot is a SaaS platform that provides AI assistants for supply chain automation, designed to optimize and streamline various supply chain processes, including inventory management, procurement, logistics, and order fulfillment. 
          The services include real-time data analytics, predictive modeling, and automation tools to enhance supply chain efficiency.
          </p>
        </li>
        <li>
          <div className='font-semibold'>3. Account Registration</div>
          <p className='mb-7 last:mb-0'>
          To use Logpilot, you must create an account and provide accurate, complete, and updated information as prompted by the registration forms. 
          You are solely responsible for safeguarding your account information and agree to notify us immediately of any unauthorized use of your account.
          </p>
        </li>
        
        <li>
          <div className='font-semibold'>4. User Obligations</div>
          <p className='mb-7 last:mb-0'>
          You agree to use the platform only for lawful purposes and in compliance with all applicable laws and regulations. 
          You will not use the platform in any manner that could damage, disable, overburden, or impair the service. You will not attempt to gain unauthorized access to any parts of the platform, other user accounts, or any servers or networks. 
          </p>
        </li>
        <li>
          <div className='font-semibold'>5. Subscription and Fees</div>
          <p className='mb-7 last:mb-0'>
          Certain features of Logpilot may be provided for a fee or other charge. 
          If you choose to use paid aspects of the platform, you agree to the pricing and payment terms specified at the time of purchase. 
          We reserve the right to change prices and the terms of our service at any time.
          </p>
        </li>
        <li>
          <div className='font-semibold'>6. Data Storage & EU Data Residency</div>
          <p className='mb-7 last:mb-0'>
          Logpilot is committed to ensuring that all personal data of users located in the European Union (EU) is stored exclusively within the EU. 
          Specifically, all data related to EU customers will be hosted on servers located in Germany.
          </p>
        </li>
        
      </ul>
      <div className='font-semibold'>7. GDPR Compliance</div>
      <p className='mb-7 last:mb-0'>
      As a German company, Logpilot platform comply with the General Data Protection Regulation (GDPR). 
      The following are key principles regarding how we handle your data under GDPR:
          </p>
      <ul className='mb-7 last:mb-0'>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Lawfulness, Fairness, and Transparency:</strong> We process personal data only with a legal basis, and we will inform users about data collection practices.
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Data Minimization:</strong> We collect only the data necessary for the functionality of the service.
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Accuracy:</strong> We ensure that all personal data we store is accurate and up-to-date.
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Storage Limitation:</strong> We retain personal data for only as long as necessary to fulfill the service requirements, after which data will be deleted or anonymized.
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Confidentiality and Integrity:</strong> We ensure that appropriate technical and organizational measures are in place to protect personal data from unauthorized access, disclosure, or destruction.
        </li>
      </ul>
      <p className='mb-7 last:mb-0'>
      <strong>Data Subject Rights:</strong> <br></br>As per GDPR, you have the right to:
      </p>
      <ul className='mb-7 last:mb-0'>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Access your data.</strong> 
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Rectify inaccuracies in your data.</strong> 
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Request the erasure of your data.</strong> 
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Restrict or object to certain data processing activities.</strong> 
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Port your data to another service provider.</strong> 
        </li>
        <li className='relative pl-[30px] after:absolute after:left-[10px] after:top-3 after:h-[5px] after:w-[5px] after:rounded-[50%] after:bg-black'>
        <strong>Lodge a complaint with a data protection authority.</strong> 
        </li>
      </ul>
      <p className='mb-7 last:mb-0'>For any GDPR-related inquiries, you can contact us at data@logpilot.io</p>
      <ul className='mb-7 flex flex-col gap-7 last:mb-0'>
        <li>
          <div className='font-semibold'>8. Privacy Policy</div>
          <p className='mb-7 last:mb-0'>
          Our Privacy Policy outlines how we collect, use, and protect your personal information. You can review the Privacy Policy
          </p>
        </li>
        <li>
          <div className='font-semibold'>9. Intellectual Property</div>
          <p className='mb-7 last:mb-0'>
          All intellectual property rights in the platform, including but not limited to software, design, databases, and content, belong to Logpilot or its licensors. 
          You may not copy, modify, distribute, or create derivative works based on any of the content without our express written consent.
          </p>
        </li>
        <li>
          <div className='font-semibold'>10. Service Availability</div>
          <p className='mb-7 last:mb-0'>
          We strive to keep Logpilot available at all times; however, we may need to temporarily suspend the service for maintenance or upgrades. 
          We will aim to notify you in advance where possible but cannot guarantee uninterrupted service.
          </p>
        </li>
        
        <li>
          <div className='font-semibold'>11. Limitation of Liability</div>
          <p className='mb-7 last:mb-0'>
          
          To the maximum extent permitted by law, Logpilot will not be liable for any indirect, incidental, punitive, or consequential damages arising from your use of or inability to use Logpilot. 
          In no event will Logpilot’s aggregate liability exceed the fees paid by you to use the platform during the 12 months preceding the claim.
          </p>
        </li>
        <li>
          <div className='font-semibold'>12. Termination</div>
          <p className='mb-7 last:mb-0'>
          We reserve the right to suspend or terminate your access to the platform at any time for any reason, including breach of these Terms. 
          Upon termination, your right to use the service will cease immediately.
          </p>
        </li>
        <li>
          <div className='font-semibold'>13. Amendments</div>
          <p className='mb-7 last:mb-0'>
          We may modify these Terms from time to time. Changes will be effective upon posting, and continued use of the platform after the posting of changes constitutes acceptance of those changes.
          </p>
        </li>
        <li>
          <div className='font-semibold'>14. Governing Law</div>
          <p className='mb-7 last:mb-0'>
          These Terms are governed by and construed in accordance with the laws of Germany. Any disputes arising from these Terms or your use of the platform will be subject to the exclusive jurisdiction of the German courts.
          </p>
        </li>
      </ul>
    </article>
  );
};

export default Blog_Text;
