import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import Button from '../components/Button';
import { Input, TextArea, Select } from '../components/FormFields';
import { ASSETS } from '../constants/assets';
import { ChevronLeft } from 'lucide-react';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id = "contact" }) => {
  const [userType, setUserType] = useState<'company' | 'coach' | null>(null);

  const employeeOptions = [
    { value: '', label: 'Select range' },
    { value: '1-5', label: '1-5 employees' },
    { value: '6-20', label: '6-20 employees' },
    { value: '21-50', label: '21-50 employees' },
    { value: '50+', label: '50+ employees' }
  ];

  const focusOptions = [
    { value: '', label: 'Select focus area' },
    { value: 'leadership', label: 'Leadership Development' },
    { value: 'executive', label: 'Executive Coaching' },
    { value: 'team', label: 'Team Performance' },
    { value: 'culture', label: 'Culture Transformation' },
    { value: 'other', label: 'Other' }
  ];

  const experienceOptions = [
    { value: '', label: 'Select experience' },
    { value: '1-3', label: '1-3 years' },
    { value: '4-7', label: '4-7 years' },
    { value: '8-15', label: '8-15 years' },
    { value: '15+', label: '15+ years' }
  ];

  return (
    <section id={id} className="relative py-24 bg-gray-900 text-white">
      {/* Luxury background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <img 
          src={ASSETS.CONTACT}
          alt="Modern office"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={eagerViewport}
          variants={staggerContainerVariants}
        >
          <p className="text-primary uppercase font-sans font-medium text-base tracking-wider mb-6">
            Contact Us
          </p>
          <motion.h2 
            className="font-serif mb-4 text-center whitespace-nowrap"
            variants={fadeInVariants}
            style={{ fontSize: 'clamp(1.25rem, 3.5vw, 3rem)' }}
          >
            Ready to Transform Your Organization?
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto mb-8"
            variants={fadeInVariants}
          />
          <motion.p 
            className="font-sans text-xl text-gray-300 max-w-2xl mx-auto"
            variants={fadeInVariants}
          >
            Start building your winning formula today. Let's discuss how MatchedWell can elevate your business.
          </motion.p>
        </motion.div>

        {/* User type selection */}
        {!userType && (
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-lg mb-6">I am a...</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setUserType('company')}
                variant="outline"
                size="lg"
                className="min-w-[200px]"
              >
                Company Representative
              </Button>
              <Button
                onClick={() => setUserType('coach')}
                variant="outline"
                size="lg"
                className="min-w-[200px]"
              >
                Professional Coach
              </Button>
            </div>
          </motion.div>
        )}

        {/* Dynamic form */}
        <AnimatePresence mode="wait">
        {userType && (
          <motion.div 
            key={userType}
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 md:p-12 border border-white/20"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Back button */}
            <motion.button
              type="button"
              onClick={() => setUserType(null)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back</span>
            </motion.button>

            <motion.form 
              className="space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainerVariants}
            >
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={fadeInVariants}
              >
                <Input 
                  label="First Name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  required
                />
                <Input 
                  label="Last Name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </motion.div>
              
              <motion.div variants={fadeInVariants}>
                <Input 
                  label="Email"
                  name="email"
                  type="email"
                  placeholder={userType === 'company' ? "john.doe@company.com" : "john.doe@email.com"}
                  required
                />
              </motion.div>
              
              <AnimatePresence mode="wait">
              {userType === 'company' ? (
                <>
                  <motion.div variants={fadeInVariants}>
                    <Input 
                      label="Company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInVariants}>
                    <Input 
                      label="Role"
                      name="role"
                      type="text"
                      placeholder="e.g., Chief People Officer"
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <Select 
                      label="Number of Employees to Coach"
                      name="employeeCount"
                      options={employeeOptions}
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <Select 
                      label="Primary Coaching Focus"
                      name="coachingFocus"
                      options={focusOptions}
                      required
                    />
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div variants={fadeInVariants}>
                    <Input 
                      label="Coaching Specialty"
                      name="specialty"
                      type="text"
                      placeholder="e.g., Executive Leadership, Career Transition"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInVariants}>
                    <Select 
                      label="Years of Experience"
                      name="experience"
                      options={experienceOptions}
                      required
                    />
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <Input 
                      label="Certifications"
                      name="certifications"
                      type="text"
                      placeholder="e.g., ICF-PCC, EMCC Senior Practitioner"
                    />
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <Input 
                      label="LinkedIn Profile"
                      name="linkedin"
                      type="url"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </motion.div>
                </>
              )}
              </AnimatePresence>
              
              <motion.div variants={fadeInVariants}>
                <TextArea 
                  label={userType === 'company' 
                    ? "Tell us about your coaching needs" 
                    : "What makes you a great coach?"}
                  name="message"
                  rows={4}
                  placeholder={userType === 'company' 
                    ? "Describe your team's challenges and goals..." 
                    : "Share your coaching philosophy and approach..."}
                  required
                />
              </motion.div>
              
              <motion.div variants={fadeInVariants}>
                <Button 
                  type="submit"
                  fullWidth
                >
                  {userType === 'company' ? "Get Your Custom Proposal" : "Apply to Join Our Network"}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        )}
        </AnimatePresence>

        {/* Alternative CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainerVariants}
        >
          <motion.p 
            className="text-lg text-gray-400 mb-4"
            variants={fadeInVariants}
          >
            Prefer to talk? Let's schedule a call.
          </motion.p>
          <motion.div variants={fadeInVariants}>
            <Button variant="secondary">
              Book a Discovery Call
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;