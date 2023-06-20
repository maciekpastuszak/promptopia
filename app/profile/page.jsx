"use client"

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Profile from '@component/profile';

const Profile = () => {

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

  return (
    <Profile 
        name="My"
        desc="Welcome to your personalized profile page"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}

export default Profile