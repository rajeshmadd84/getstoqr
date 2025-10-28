import { useState } from 'react';
import swal from 'sweetalert';

const Contact_From = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.email === '' ||
      input.password === '' ||
      input.phone === '' ||
      input.message === ''
    ) {
      swal('Opes', 'Please fill required fields', 'error');
      return;
    }
  };

  return (
    <div className='order-1 block rounded-lg bg-white px-[30px] py-[50px] shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] md:order-2'>
      {/* Contact Form */}
      
                
<div class="calendly-inline-widget" data-url="https://calendly.com/logpilot-demo/30min?primary_color=0000f0" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>

              
      {/* Contact Form */}
    </div>
  );
};

export default Contact_From;
