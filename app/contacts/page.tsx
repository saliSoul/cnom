'use client'
import { motion } from 'framer-motion';

function Contact() {
  return (
    <div className="relative bg-gradient-to-b from-sky-50 to-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }} />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <motion.h3
          className="text-sky-700 text-2xl lg:text-4xl font-semibold mb-3 tracking-widest uppercase"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contactez Nous!
        </motion.h3>
        <p className="mt-2 text-lg text-gray-700 font-medium">
          Une question ? Une demande ? Écrivez-nous, nous sommes à votre écoute !
        </p>
      </div>
      <motion.form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {['Prénom', 'Nom'].map((label, index) => (
            <div key={index}>
              <label className="block text-sm font-semibold text-gray-900">
                {label}
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 transition-transform focus:outline-2 focus:outline-green-600 focus:scale-105"
                  placeholder={label} />
              </div>
            </div>
          ))}
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Email</label>
            <div className="mt-2.5">
              <input
                type="email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base border border-gray text-gray-900 outline-1 -outline-offset-0 outline-gray-300 placeholder:text-gray-400 transition-transform focus:outline-2 focus:outline-green-600 focus:scale-105"
                placeholder="Votre email" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-gray-900">Message</label>
            <div className="mt-2.5">
              <textarea
                rows={4}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base border border-gray text-gray-900 outline-1 outline-green-300 placeholder:text-gray-400 transition-transform focus:outline-2 focus:outline-green-600 focus:scale-105"
                placeholder="Votre message..." />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <motion.button
            type="submit"
            className="block w-full rounded-md bg-sky-700 px-3.5 py-2.5 text-center  border border-gray text-lg font-bold text-white shadow-md transition-all duration-300 hover:bg-sky-600 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Envoyer !
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
export default Contact;
