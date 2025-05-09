/*
  # Add storage bucket for property images

  1. Create a new storage bucket for property images
  2. Set up public access policies
*/

-- Enable storage
INSERT INTO storage.buckets (id, name, public)
VALUES ('property-images', 'property-images', true);

-- Allow public access to property images
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'property-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'property-images');

-- Allow users to update and delete their own images
CREATE POLICY "Users can update their own images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'property-images' AND owner = auth.uid());

CREATE POLICY "Users can delete their own images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'property-images' AND owner = auth.uid());