import Header from '@/components/Header';
import { MadeWithApplaa } from '@/components/made-with-applaa';
import { Mail, MessageSquare, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { showSuccess } from '@/utils/toast';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-[#fffcf5]">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-amber-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-amber-800/70">
              Have a simple soup recipe to share? Or just want to say hi?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-800/50 font-bold uppercase">Email Us</p>
                    <p className="text-amber-900 font-medium">hello@soupsimple.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-800/50 font-bold uppercase">Social</p>
                    <p className="text-amber-900 font-medium">@soupsimple_cooks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-amber-800/50 font-bold uppercase">Location</p>
                    <p className="text-amber-900 font-medium">The Cozy Kitchen, Earth</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-900 text-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                <p className="text-amber-200/70 text-sm mb-6">
                  Get one simple soup recipe in your inbox every Sunday.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Email address" className="bg-white/10 border-white/20 text-white placeholder:text-white/40" />
                  <Button className="bg-orange-500 hover:bg-orange-600">Join</Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-orange-50 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-amber-900 ml-1">Your Name</label>
                    <Input placeholder="John Doe" className="rounded-xl border-orange-100 focus:ring-orange-500" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-amber-900 ml-1">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="rounded-xl border-orange-100 focus:ring-orange-500" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-900 ml-1">Subject</label>
                  <Input placeholder="Recipe Suggestion" className="rounded-xl border-orange-100 focus:ring-orange-500" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-amber-900 ml-1">Message</label>
                  <Textarea placeholder="Tell us what's on your mind..." className="rounded-xl border-orange-100 focus:ring-orange-500 min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white py-6 rounded-xl text-lg font-bold shadow-lg shadow-orange-200 transition-all hover:scale-[1.02]">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-amber-50/50 py-12 mt-20 border-t border-orange-100">
        <div className="container mx-auto px-4 text-center">
          <MadeWithApplaa />
        </div>
      </footer>
    </div>
  );
}