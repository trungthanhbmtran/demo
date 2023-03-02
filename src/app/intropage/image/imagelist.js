'use client'
import * as React from 'react';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList({data}) {
  // console.log('ProjectImage', data)
  return (
                <ImageListItem >
                  <img
                    src={data}
                    loading="lazy"
                  />
                </ImageListItem>
  );
}
