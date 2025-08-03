import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInVariants, staggerContainerVariants, defaultViewport, eagerViewport } from '../hooks/useScrollAnimation';
import SectionTag from '../components/SectionTag';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id = "contact" }) => {
  const [userType, setUserType] = useState<'company' | 'coach' | null>(null);

  return (
    <section id={id} className="relative py-24 bg-gray-900 text-white">
      {/* Luxury background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80" />
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&h=800&fit=crop"
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
          <SectionTag label="Contact Us" className="text-white" />
          <motion.h2 
            className="font-serif text-5xl md:text-6xl mb-4"
            variants={fadeInVariants}
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
            Start building your winning formula today. Let's discuss how MatchedWell can elevate your leadership.
          </motion.p>
        </motion.div>

        {/* User Type Selection */}
        <motion.div 
          className="mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={fadeInVariants}
        >
          <p className="text-center font-sans text-lg mb-6">I am a:</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <button
              onClick={() => setUserType('company')}
              className={`flex-1 py-4 px-6 rounded-lg border-2 transition-all ${
                userType === 'company' 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-white/10 border-white/20 hover:border-white/40 text-white'
              }`}
            >
              <span className="font-medium">Company Representative</span>
            </button>
            <button
              onClick={() => setUserType('coach')}
              className={`flex-1 py-4 px-6 rounded-lg border-2 transition-all ${
                userType === 'coach' 
                  ? 'bg-primary border-primary text-white' 
                  : 'bg-white/10 border-white/20 hover:border-white/40 text-white'
              }`}
            >
              <span className="font-medium">Professional Coach</span>
            </button>
          </div>
        </motion.div>
        
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
                <div>
                  <label className="block text-sm font-sans text-gray-300 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-sans text-gray-300 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </motion.div>
              
              <motion.div variants={fadeInVariants}>
                <label className="block text-sm font-sans text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                  placeholder={userType === 'company' ? "john.doe@company.com" : "john.doe@email.com"}
                />
              </motion.div>
              
              <AnimatePresence mode="wait">
              {userType === 'company' ? (
                <>
                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your Company"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">Role</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., Chief People Officer"
                    />
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">Number of Employees to Coach</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="" className="bg-gray-900">Select range</option>
                      <option value="1-5" className="bg-gray-900">1-5 employees</option>
                      <option value="6-20" className="bg-gray-900">6-20 employees</option>
                      <option value="21-50" className="bg-gray-900">21-50 employees</option>
                      <option value="50+" className="bg-gray-900">50+ employees</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">Primary Coaching Focus</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="" className="bg-gray-900">Select focus area</option>
                      <option value="leadership" className="bg-gray-900">Leadership Development</option>
                      <option value="executive" className="bg-gray-900">Executive Coaching</option>
                      <option value="team" className="bg-gray-900">Team Performance</option>
                      <option value="culture" className="bg-gray-900">Culture Transformation</option>
                      <option value="other" className="bg-gray-900">Other</option>
                    </select>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">Coaching Specialty</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., Executive Leadership, Career Transition"
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">Years of Experience</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                      <option value="" className="bg-gray-900">Select experience</option>
                      <option value="1-3" className="bg-gray-900">1-3 years</option>
                      <option value="4-7" className="bg-gray-900">4-7 years</option>
                      <option value="8-15" className="bg-gray-900">8-15 years</option>
                      <option value="15+" className="bg-gray-900">15+ years</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">Certifications</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., ICF-PCC, EMCC Senior Practitioner"
                    />
                  </motion.div>

                  <motion.div variants={fadeInVariants}>
                    <label className="block text-sm font-sans text-gray-300 mb-2">LinkedIn Profile</label>
                    <input 
                      type="url" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </motion.div>
                </>
              )}
              </AnimatePresence>
              
              <motion.div variants={fadeInVariants}>
                <label className="block text-sm font-sans text-gray-300 mb-2">
                  {userType === 'company' 
                    ? "Tell us about your coaching needs" 
                    : "What makes you a great coach?"}
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder={userType === 'company' 
                    ? "Describe your team's challenges and goals..." 
                    : "Share your coaching philosophy and approach..."}
                ></textarea>
              </motion.div>
              
              <motion.button 
                variants={fadeInVariants}
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-8 py-4 rounded-lg transition-colors"
              >
                {userType === 'company' ? "Get Your Custom Proposal" : "Apply to Join Our Network"}
              </motion.button>
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
          variants={fadeInVariants}
        >
          <p className="font-sans text-gray-400 mb-4">Prefer to talk? Schedule a call directly:</p>
          <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;