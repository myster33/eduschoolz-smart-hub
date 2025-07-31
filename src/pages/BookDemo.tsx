
import { useState } from 'react';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { useToast } from '@/components/ui/use-toast';
import { sendBookDemoEmail, type BookDemoFormData } from '@/utils/emailService';
import { format, addDays, isWeekend, isBefore, startOfDay } from 'date-fns';

const BookDemo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [specificFeatures, setSpecificFeatures] = useState<string[]>([]);

  const [formData, setFormData] = useState<BookDemoFormData>({
    name: '',
    email: '',
    schoolName: '',
    position: '',
    phoneNumber: '',
    schoolType: '',
    studentCount: '',
    currentSystem: '',
    specificNeeds: [],
    preferredContactMethod: '',
    timeframe: '',
    additionalComments: '',
    preferredDemoDate: '',
    preferredDemoTime: '',
    demoMode: '',
    schoolAddress: ''
  });

  const featureOptions = [
    'Student Attendance Management',
    'Student Account Payments Monitoring and Receipting',
    'Payment Reports and Other Financial Reports',
    'School Summative Payments and Balances',
    'Debtors Management and Debt Collection',
    'Asset Management',
    'Paymaster for staff attendance tracking and payroll statistics',
    'Barcode Technology for Attendance Tracking',
    'Real-Time SMS Alerts and Notifications',
    'Mobile Application (Centralized communication and information transmission to parents and guardians)'
  ];

  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'
  ];

  const handleInputChange = (field: keyof BookDemoFormData, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureChange = (feature: string, checked: boolean) => {
    let updatedFeatures;
    if (checked) {
      updatedFeatures = [...specificFeatures, feature];
    } else {
      updatedFeatures = specificFeatures.filter(f => f !== feature);
    }
    setSpecificFeatures(updatedFeatures);
    handleInputChange('specificNeeds', updatedFeatures);
  };

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      const dateTimeKey = `${format(selectedDate, 'yyyy-MM-dd')}-${selectedTime}`;
      
      if (bookedSlots.has(dateTimeKey)) {
        toast({
          title: "Time Slot Unavailable",
          description: "This time slot is already booked. Please select another time.",
          variant: "destructive",
        });
        return;
      }

      const formattedDate = format(selectedDate, 'EEEE, MMMM d, yyyy');
      const formattedTime = `${selectedTime}:00`;
      
      setFormData(prev => ({
        ...prev,
        preferredDemoDate: formattedDate,
        preferredDemoTime: formattedTime
      }));

      // Mark this slot as booked (in a real app, this would be persisted to a database)
      setBookedSlots(prev => new Set([...prev, dateTimeKey]));
      
      setShowDateTimePicker(false);
      setSelectedDate(undefined);
      setSelectedTime('');
    }
  };

  const isDateDisabled = (date: Date) => {
    const today = startOfDay(new Date());
    const maxDate = addDays(today, 30);
    
    return isBefore(date, today) || 
           date > maxDate || 
           isWeekend(date);
  };

  const isTimeSlotBooked = (time: string) => {
    if (!selectedDate) return false;
    const dateTimeKey = `${format(selectedDate, 'yyyy-MM-dd')}-${time}`;
    return bookedSlots.has(dateTimeKey);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = [
      'name', 'email', 'schoolName', 'position', 'schoolType', 'studentCount', 
      'preferredContactMethod', 'timeframe', 'preferredDemoDate', 'preferredDemoTime', 
      'demoMode', 'schoolAddress'
    ];
    const missingFields = requiredFields.filter(field => !formData[field as keyof BookDemoFormData]);
    
    if (missingFields.length > 0) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields marked with *",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendBookDemoEmail(formData);
      
      toast({
        title: "Demo Request Sent Successfully!",
        description: "We'll contact you within 24 hours to confirm your demo appointment.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        schoolName: '',
        position: '',
        phoneNumber: '',
        schoolType: '',
        studentCount: '',
        currentSystem: '',
        specificNeeds: [],
        preferredContactMethod: '',
        timeframe: '',
        additionalComments: '',
        preferredDemoDate: '',
        preferredDemoTime: '',
        demoMode: '',
        schoolAddress: ''
      });
      setSpecificFeatures([]);
    } catch (error) {
      console.error('Error sending demo request:', error);
      toast({
        title: "Error",
        description: "Failed to send demo request. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-600 to-primary-700">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="outline" className="mb-6 border-green-400 text-green-400 hover:bg-green-400 hover:text-primary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Book Your Demo</h1>
            <p className="text-xl text-primary-100">
              Ready to get started? Fill out the form below to schedule your demo.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Personal Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="position">Position/Title *</Label>
                    <Input
                      id="position"
                      type="text"
                      required
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>

              {/* School Information */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">School Information</h2>
                
                <div>
                  <Label htmlFor="schoolName">School Name *</Label>
                  <Input
                    id="schoolName"
                    type="text"
                    required
                    value={formData.schoolName}
                    onChange={(e) => handleInputChange('schoolName', e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="schoolAddress">School Address *</Label>
                  <Textarea
                    id="schoolAddress"
                    required
                    value={formData.schoolAddress}
                    onChange={(e) => handleInputChange('schoolAddress', e.target.value)}
                    className="mt-1"
                    rows={3}
                    placeholder="Full address of the school"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="schoolType">School Type *</Label>
                    <Select value={formData.schoolType} onValueChange={(value) => handleInputChange('schoolType', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select school type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="primary">Primary School</SelectItem>
                        <SelectItem value="secondary">Secondary School</SelectItem>
                        <SelectItem value="combined">Combined School</SelectItem>
                        <SelectItem value="private">Private School</SelectItem>
                        <SelectItem value="public">Public School</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="studentCount">Number of Students *</Label>
                    <Select value={formData.studentCount} onValueChange={(value) => handleInputChange('studentCount', value)}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select student count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-100">1-100 students</SelectItem>
                        <SelectItem value="101-300">101-300 students</SelectItem>
                        <SelectItem value="301-500">301-500 students</SelectItem>
                        <SelectItem value="501-1000">501-1000 students</SelectItem>
                        <SelectItem value="1000+">1000+ students</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="currentSystem">Current Management System (if any)</Label>
                  <Input
                    id="currentSystem"
                    type="text"
                    value={formData.currentSystem}
                    onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                    className="mt-1"
                    placeholder="e.g., Manual records, Excel, other software"
                  />
                </div>
              </div>

              {/* Demo Preferences */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Demo Preferences</h2>
                
                <div>
                  <Label>Specific Features You're Most Interested In</Label>
                  <div className="mt-2 space-y-3 max-h-48 overflow-y-auto">
                    {featureOptions.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={specificFeatures.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                        />
                        <Label htmlFor={feature} className="text-sm leading-tight">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label>Preferred Date and Time for Demo *</Label>
                  <Dialog open={showDateTimePicker} onOpenChange={setShowDateTimePicker}>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full mt-1 justify-start text-left font-normal"
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        {formData.preferredDemoDate && formData.preferredDemoTime
                          ? `${formData.preferredDemoDate} at ${formData.preferredDemoTime}`
                          : "Select date and time"
                        }
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px]">
                      <DialogHeader>
                        <DialogTitle>Select Demo Date and Time</DialogTitle>
                      </DialogHeader>
                      <div className="flex flex-col md:flex-row gap-6">
                        <div>
                          <Label>Select Date (Monday-Friday only)</Label>
                          <CalendarComponent
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={isDateDisabled}
                            className="rounded-md border mt-2"
                          />
                        </div>
                        <div className="flex-1">
                          <Label>Select Time (9 AM - 4 PM)</Label>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            {timeSlots.map((time) => (
                              <Button
                                key={time}
                                type="button"
                                variant={selectedTime === time ? "default" : "outline"}
                                disabled={isTimeSlotBooked(time)}
                                onClick={() => setSelectedTime(time)}
                                className="justify-center"
                              >
                                <Clock className="mr-2 h-4 w-4" />
                                {time}:00
                                {isTimeSlotBooked(time) && " (Booked)"}
                              </Button>
                            ))}
                          </div>
                          <div className="mt-4">
                            <Button
                              type="button"
                              onClick={handleDateTimeSelect}
                              disabled={!selectedDate || !selectedTime}
                              className="w-full"
                            >
                              Confirm Selection
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div>
                  <Label>Mode of Demo *</Label>
                  <RadioGroup 
                    value={formData.demoMode} 
                    onValueChange={(value) => handleInputChange('demoMode', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online-demo" />
                      <Label htmlFor="online-demo">Online Demo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="onsite" id="onsite-demo" />
                      <Label htmlFor="onsite-demo">Onsite Demo</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label>Preferred Contact Method *</Label>
                  <RadioGroup 
                    value={formData.preferredContactMethod} 
                    onValueChange={(value) => handleInputChange('preferredContactMethod', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="email" id="email-contact" />
                      <Label htmlFor="email-contact">Email</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="phone" id="phone-contact" />
                      <Label htmlFor="phone-contact">Phone Call</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="both" id="both-contact" />
                      <Label htmlFor="both-contact">Both Email and Phone</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="timeframe">When would you like to implement? *</Label>
                  <Select value={formData.timeframe} onValueChange={(value) => handleInputChange('timeframe', value)}>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediately">Immediately</SelectItem>
                      <SelectItem value="1-3months">Within 1-3 months</SelectItem>
                      <SelectItem value="3-6months">Within 3-6 months</SelectItem>
                      <SelectItem value="6+months">More than 6 months</SelectItem>
                      <SelectItem value="researching">Just researching options</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="additionalComments">Additional Comments or Questions</Label>
                  <Textarea
                    id="additionalComments"
                    value={formData.additionalComments}
                    onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                    className="mt-1"
                    rows={4}
                    placeholder="Tell us more about your school's specific needs or any questions you have..."
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full text-lg py-3"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Book Demo'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
