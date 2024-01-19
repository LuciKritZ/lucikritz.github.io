'use client';

import { useState } from 'react';

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SocialIcon } from 'react-social-icons';

import { Social } from '@/typings';
import { EMAIL_REGEX_PATTERN } from '@/utils/email';

import SectionContainer from '../_components/section/container.section';
import SectionHeader from '../_components/section/header.section';

type ContactMeProps = {
  email: string;
  phone: string;
  socials: Social[];
};

type InputFieldsType = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = ({ email, phone, socials }: ContactMeProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputFieldsType>();

  const [errorMessage, setErrorMessage] = useState<string>('');

  const showErrorMessage = () => {
    if (errors.name) {
      setErrorMessage('Please enter the name');
      return true;
    }
    if (errors.email) {
      setErrorMessage('Please enter a valid email');
      return true;
    }
    if (errors.subject) {
      setErrorMessage('Please enter the subject');
    }
    return false;
  };

  const onSubmit: SubmitHandler<InputFieldsType> = (
    formData: InputFieldsType
  ) => {
    if (showErrorMessage()) {
      return;
    }
    window.location.href = `mailto:${email}?subject=${formData.subject}&body=Hey, ${formData.name} (${formData.email}) here. I have a message for you: ${formData.message}`;
  };

  return (
    <SectionContainer className='flex overflow-hidden flex-col text-left md:flex-row justify-evenly mx-auto items-center z-0 truncate'>
      <SectionHeader>Hit me up!</SectionHeader>

      <div className='flex flex-col mt-[18vh] space-y-[4vh] justify-end items-center mx-[5vh] max-h-[80vh] overflow-y-auto'>
        <div className='flex flex-col space-y-[2vh]'>
          <div className='flex items-center space-x-[1vh]'>
            <PhoneIcon className='text-[#e17e7e] h-[3vh] animate-pulse' />
            <p className='text-[2.5vh]'>{phone}</p>
          </div>

          <div className='flex items-center space-x-[1vh]'>
            <EnvelopeIcon className='text-[#e17e7e] h-[3vh] animate-pulse' />
            <p className='text-[2.5vh]'>{email}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-[1.5vh] mx-auto md:w-fit w-full'
        >
          <div className='flex flex-col md:flex-row md:space-x-[1.5vh] space-y-[1.5vh] md:space-y-0'>
            <input
              {...register('name', { required: true })}
              placeholder='Name'
              className='contact-input'
              type='text'
            />
            <input
              {...register('email', {
                required: true,
                pattern: EMAIL_REGEX_PATTERN,
              })}
              placeholder='Email'
              className='contact-input'
              type='email'
            />
          </div>

          <input
            {...register('subject', { required: true })}
            placeholder='Subject'
            className='contact-input'
            type='text'
          />

          <textarea
            {...register('message')}
            className='contact-input max-h-[20vh] overflow-y-scroll'
            placeholder="What's up?"
          />

          <button
            type='submit'
            className='text-[2.5vh] px-[1.5vh] py-[1.5vh] border border-[#E17E7E] rounded-md text-white font-bold hover:bg-[#E17E7E] transition-all duration-300 ease-linear'
          >
            Submit
          </button>
        </form>

        <div className='flex-1 flex flex-row gap-x-4'>
          {socials.map(({ _id, link, title }, index) => (
            <motion.div
              initial={{ x: -500, opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1 + (index + 1) * 0.05 }}
              key={_id}
            >
              <SocialIcon
                href={link}
                target='_blank'
                network={title.toLowerCase().trim()}
                fgColor='#e17e7e'
                bgColor='white'
                className='cursor-pointer social-media-icon'
              />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactMe;
