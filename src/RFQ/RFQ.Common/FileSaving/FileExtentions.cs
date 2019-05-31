using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Text;

namespace RFQ.Common
{
    public static class FileExtentions
    {
        private static string folderName = Path.Combine("StaticFiles", "files");
        public static string SaveFile(IFormFile file, string rootPath)
        {
            if (file != null)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                string pathToSave = Path.Combine(rootPath, folderName);
                //fileName = Path.GetFileName(fileName).Trim() + DateTime.UtcNow.Ticks.ToString() + Path.GetExtension(fileName);

                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = fileName; //you can add this path to a list and then return all dbPaths to the client if require

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                return dbPath;
            }

            return null;
        }

        public static FileStream DownloadFile(string fileName, string rootPath)
        {
            string folderPath = Path.Combine(rootPath, folderName);
            string filePath = Path.Combine(folderPath, fileName);
            return new FileStream(filePath, FileMode.Open, FileAccess.Read);
        }

        public static string GetMimeType(string file)
        {
            string extension = Path.GetExtension(file).ToLowerInvariant();
            switch (extension)
            {
                case ".txt": return "text/plain";
                case ".pdf": return "application/pdf";
                case ".doc": return "application/vnd.ms-word";
                case ".docx": return "application/vnd.ms-word";
                case ".xls": return "application/vnd.ms-excel";
                case ".png": return "image/png";
                case ".jpg": return "image/jpeg";
                case ".jpeg": return "image/jpeg";
                case ".gif": return "image/gif";
                case ".csv": return "text/csv";
                default: return "";
            }
        }
    }
}
