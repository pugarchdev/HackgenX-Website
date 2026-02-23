import React from 'react';
import { Eligibility } from '../../components/Eligibility/Eligibility';
import PrizePool from '../../components/PrizePool/PrizePool';
import Sponsors from '../../components/Sponsors/Sponsors';
import Sturcture from '../../components/Structure/Sturcture';
import Whyparticipate from '../../components/Why participate/Whyparticipate';
import Timeline from "../../components/Timeline/Timeline";
import Hero from '../../components/Hero/Hero';
import Speaker from '../../components/Speaker/Speaker';
function Home() {

  const registrationOpen = true; // This could be controlled by your backend
  const registrationEndDate = "March 20, 2025";
  const sponsors = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=128&h=64&fit=crop",
    "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=64&fit=crop",
  ];


  const Loader = () => {
    return (
      <Loader
        type="Puff"
        color="#0f223f"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  };

  const timeline = [
    {
      date: "March 15, 2025",
      time: "10:00 AM",
      event: "Opening Ceremony",
      description: "Welcome address and track announcements"
    },
    {
      date: "March 15, 2025",
      time: "12:00 PM",
      event: "Team Formation & Ideation",
      description: "Form your teams and start brainstorming"
    },
    {
      date: "March 16, 2025",
      time: "10:00 AM",
      event: "Mentorship Sessions",
      description: "Get guidance from industry experts"
    },
    {
      date: "March 17, 2025",
      time: "12:00 PM",
      event: "Project Submission",
      description: "Submit your projects for evaluation"
    },
    {
      date: "March 17, 2025",
      time: "6:00 PM",
      event: "Closing Ceremony",
      description: "Winners announcement and prize distribution"
    }
  ];

  return (

    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">

      {/* <p> Inside Home Page 🏠</p> */}

      <Hero />
      <Sponsors />
      <Whyparticipate />
      <Sturcture />
      <Eligibility />
      <Timeline />
      {/* <Speaker /> */}
      <PrizePool />

    </div>

  );


}
export default Home;