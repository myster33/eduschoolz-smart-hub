import { useState } from 'react';
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight, CheckCircle, Home } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { sendBookDemoEmail, type BookDemoFormData } from '@/utils/emailService';
import { format, addDays, isWeekend, isBefore, startOfDay, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addWeeks, isSameMonth, getDay, addMonths, isSameDay } from 'date-fns';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BookDemo = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDateTimePicker, setShowDateTimePicker] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [bookedSlots, setBookedSlots] = useState<Set<string>>(new Set());
  const [specificFeatures, setSpecificFeatures] = useState<string[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

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

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Generate calendar weeks for a given month
  const generateCalendarWeeks = (month: Date) => {
    const monthStart = startOfMonth(month);
    const monthEnd = endOfMonth(month);
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 0 }); // Start on Sunday
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const weeks = [];
    let currentWeek = calendarStart;

    while (currentWeek <= calendarEnd) {
      const week = [];
      for (let i = 0; i < 7; i++) {
        const day = addDays(currentWeek, i);
        week.push(day);
      }
      weeks.push(week);
      currentWeek = addWeeks(currentWeek, 1);
    }

    return weeks;
  };

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
      const formattedTime = `${selectedTime}`;
      
      setFormData(prev => ({
        ...prev,
        preferredDemoDate: formattedDate,
        preferredDemoTime: formattedTime
      }));

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

  const renderCalendarMonth = (month: Date) => {
    const weeks = generateCalendarWeeks(month);
    const monthName = format(month, 'MMMM yyyy');

    return (
      <div key={monthName} className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 rounded-t-lg">
          <h3 className="text-lg font-semibold text-gray-800 text-center">{monthName}</h3>
        </div>
        <div className="p-4">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {dayNames.map((day, index) => (
              <div
                key={day}
                className={`text-center text-sm font-medium py-2 ${
                  index === 0 ? 'text-red-600' : 'text-gray-600'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
          
          {/* Calendar grid */}
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-1 mb-1">
              {week.map((day, dayIndex) => {
                const isCurrentMonth = isSameMonth(day, month);
                const isSunday = getDay(day) === 0;
                const isDisabled = isDateDisabled(day);
                const isSelected = selectedDate && isSameDay(day, selectedDate);
                const isToday = isSameDay(day, new Date());

                return (
                  <button
                    key={day.toISOString()}
                    type="button"
                    onClick={() => !isDisabled && setSelectedDate(day)}
                    disabled={isDisabled}
                    className={`
                      h-10 w-full text-sm rounded-md transition-all duration-200 font-medium
                      ${!isCurrentMonth 
                        ? 'text-gray-300 cursor-not-allowed' 
                        : isDisabled
                          ? 'text-gray-400 cursor-not-allowed bg-gray-100'
                          : isSelected
                            ? 'bg-primary text-white shadow-md'
                            : isToday
                              ? 'bg-primary/10 text-primary border-2 border-primary'
                              : isSunday
                                ? 'text-red-600 hover:bg-red-50'
                                : 'text-gray-700 hover:bg-gray-100'
                      }
                      ${isCurrentMonth && !isDisabled ? 'cursor-pointer' : ''}
                    `}
                  >
                    {format(day, 'd')}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
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

    // Show confirmation dialog instead of submitting directly
    setShowConfirmDialog(true);
  };

  const handleConfirmSubmit = async () => {
    setShowConfirmDialog(false);
    setIsSubmitting(true);

    try {
      await sendBookDemoEmail(formData);
      
      setIsSubmitting(false);
      setShowSuccessDialog(true);

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
      setIsSubmitting(false);
      toast({
        title: "Error",
        description: "Failed to send demo request. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleBackHome = () => {
    setShowSuccessDialog(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary-600 to-primary-700">
      <Header />
      
      <div className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Talk to our Technical Team</h1>
            <p className="text-xl text-primary-100">
              Fill out the form below to schedule your installation demo and know more about the product.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-2xl p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
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
                <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Installation Demo Preferences</h2>
                
                <div>
                  <Label>Specific Features You're Most Interested In</Label>
                  <div className="mt-2 space-y-3 max-h-48 overflow-y-auto border border-gray-200 rounded-md p-4 bg-gray-50">
                    {featureOptions.map((feature) => (
                      <div key={feature} className="flex items-start space-x-3">
                        <Checkbox
                          id={feature}
                          checked={specificFeatures.includes(feature)}
                          onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                          className="mt-0.5"
                        />
                        <Label htmlFor={feature} className="text-sm leading-relaxed flex-1 cursor-pointer">{feature}</Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Preferred Date and Time for Installation Demo *</Label>
                  <p className="text-sm text-gray-600 mt-1 mb-3">Select your preferred date and time for the installation demo session</p>
                  <Dialog open={showDateTimePicker} onOpenChange={setShowDateTimePicker}>
                    <DialogTrigger asChild>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full mt-1 justify-start text-left font-normal h-12 border-2 hover:border-primary"
                      >
                        <Calendar className="mr-3 h-5 w-5 text-primary" />
                        <div className="flex flex-col items-start">
                          {formData.preferredDemoDate && formData.preferredDemoTime ? (
                            <>
                              <span className="font-medium">{formData.preferredDemoDate}</span>
                              <span className="text-sm text-gray-500">at {formData.preferredDemoTime}</span>
                            </>
                          ) : (
                            <span className="text-gray-500">Click to select date and time</span>
                          )}
                        </div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
                      <DialogHeader className="pb-4 border-b">
                        <DialogTitle className="text-xl font-semibold text-center">
                          Schedule Your Installation Demo Session
                        </DialogTitle>
                        <p className="text-sm text-gray-600 text-center mt-2">
                          Available Monday-Friday, 9:00 AM - 4:00 PM (Sundays shown in red)
                        </p>
                      </DialogHeader>
                      
                      <div className="space-y-6 py-6">
                        {/* Calendar Navigation */}
                        <div className="flex items-center justify-between mb-4">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}
                            className="flex items-center"
                          >
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Previous
                          </Button>
                          <h3 className="text-lg font-semibold">
                            Select Date (Next 30 days)
                          </h3>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                            className="flex items-center"
                          >
                            Next
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>

                        {/* Calendar Months */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {renderCalendarMonth(currentMonth)}
                          {renderCalendarMonth(addMonths(currentMonth, 1))}
                        </div>

                        {/* Time Selection */}
                        <div className="space-y-4 border-t pt-6">
                          <div>
                            <Label className="text-base font-medium">Select Time Slot</Label>
                            <p className="text-sm text-gray-600 mb-3">Choose your preferred 1-hour time slot</p>
                            {selectedDate ? (
                              <div className="grid grid-cols-4 gap-3">
                                {timeSlots.map((time) => {
                                  const isBooked = isTimeSlotBooked(time);
                                  return (
                                    <Button
                                      key={time}
                                      type="button"
                                      variant={selectedTime === time ? "default" : "outline"}
                                      disabled={isBooked}
                                      onClick={() => setSelectedTime(time)}
                                      className={`justify-center h-12 ${
                                        isBooked 
                                          ? "bg-red-50 border-red-200 text-red-400 cursor-not-allowed" 
                                          : selectedTime === time 
                                            ? "bg-primary text-white" 
                                            : "hover:bg-primary hover:text-white"
                                      }`}
                                    >
                                      <div className="flex flex-col items-center">
                                        <div className="flex items-center">
                                          <Clock className="mr-2 h-4 w-4" />
                                          <span>{time}</span>
                                        </div>
                                        {isBooked && (
                                          <span className="text-xs">Unavailable</span>
                                        )}
                                      </div>
                                    </Button>
                                  );
                                })}
                              </div>
                            ) : (
                              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg border-2 border-dashed">
                                <Calendar className="mx-auto h-12 w-12 mb-3 text-gray-400" />
                                <p>Please select a date first to see available time slots</p>
                              </div>
                            )}
                          </div>
                          
                          {selectedDate && selectedTime && (
                            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                              <h4 className="font-medium text-green-800 mb-2">Selected Schedule:</h4>
                              <p className="text-sm text-green-700">
                                <strong>Date:</strong> {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                              </p>
                              <p className="text-sm text-green-700">
                                <strong>Time:</strong> {selectedTime} - {parseInt(selectedTime) + 1}:00
                              </p>
                            </div>
                          )}
                          
                          <div className="mt-6 pt-4 border-t">
                            <Button
                              type="button"
                              onClick={handleDateTimeSelect}
                              disabled={!selectedDate || !selectedTime}
                              className="w-full h-12 text-base font-medium"
                            >
                              {!selectedDate || !selectedTime 
                                ? "Select Date and Time" 
                                : "Confirm This Schedule"
                              }
                            </Button>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div>
                  <Label>Mode of Installation Demo *</Label>
                  <RadioGroup 
                    value={formData.demoMode} 
                    onValueChange={(value) => handleInputChange('demoMode', value)}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online-demo" />
                      <Label htmlFor="online-demo">Online Installation Demo</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="onsite" id="onsite-demo" />
                      <Label htmlFor="onsite-demo">Onsite Installation Demo</Label>
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
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </form>
          </div>
        </div>

        {/* Confirmation Dialog */}
        <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
          <AlertDialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-xl font-semibold text-center">
                Confirm Your Installation Demo Request
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center text-gray-600">
                Please review your information before submitting your installation demo request.
              </AlertDialogDescription>
            </AlertDialogHeader>
            
            <div className="space-y-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">Personal Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Name:</span> {formData.name}</p>
                    <p><span className="font-medium">Email:</span> {formData.email}</p>
                    <p><span className="font-medium">Position:</span> {formData.position}</p>
                    {formData.phoneNumber && <p><span className="font-medium">Phone:</span> {formData.phoneNumber}</p>}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-lg border-b pb-2">School Information</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">School Name:</span> {formData.schoolName}</p>
                    <p><span className="font-medium">School Type:</span> {formData.schoolType}</p>
                    <p><span className="font-medium">Student Count:</span> {formData.studentCount}</p>
                    <p><span className="font-medium">Address:</span> {formData.schoolAddress}</p>
                    {formData.currentSystem && <p><span className="font-medium">Current System:</span> {formData.currentSystem}</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">Installation Demo Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <p><span className="font-medium">Installation Demo Date:</span> {formData.preferredDemoDate}</p>
                    <p><span className="font-medium">Installation Demo Time:</span> {formData.preferredDemoTime}</p>
                    <p><span className="font-medium">Mode:</span> {formData.demoMode}</p>
                    <p><span className="font-medium">Contact Method:</span> {formData.preferredContactMethod}</p>
                    <p><span className="font-medium">Implementation Timeframe:</span> {formData.timeframe}</p>
                  </div>
                  
                  {formData.specificNeeds.length > 0 && (
                    <div className="space-y-2">
                      <p className="font-medium">Interested Features:</p>
                      <ul className="list-disc list-inside space-y-1 text-xs">
                        {formData.specificNeeds.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                {formData.additionalComments && (
                  <div className="space-y-2">
                    <p className="font-medium">Additional Comments:</p>
                    <p className="text-sm bg-gray-50 p-3 rounded-md">{formData.additionalComments}</p>
                  </div>
                )}
              </div>
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel>No, Let me edit</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Yes, Submit Request'}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Success Dialog */}
        <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
          <AlertDialogContent className="max-w-md">
            <AlertDialogHeader>
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <AlertDialogTitle className="text-xl font-semibold text-center">
                Installation Request Sent Successfully!
              </AlertDialogTitle>
              <AlertDialogDescription className="text-center text-gray-600">
                We'll contact you within 24 hours to confirm your installation appointment.
              </AlertDialogDescription>
            </AlertDialogHeader>
            
            <AlertDialogFooter>
              <AlertDialogAction onClick={handleBackHome} className="w-full">
                <Home className="mr-2 h-4 w-4" />
                Back Home
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

      <Footer />
    </div>
  );
};

export default BookDemo;
