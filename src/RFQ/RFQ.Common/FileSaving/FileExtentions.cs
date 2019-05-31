﻿using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Text;

namespace RFQ.Common
{
    public class FileExtentions
    {
        private static IHostingEnvironment _environment;

        private static string folderName = Path.Combine("StaticFiles", "files");
        private static string currentDirectory;
        private static string pathToSave;       

        public FileExtentions(IHostingEnvironment environment)
        {
            _environment = environment;

            currentDirectory = _environment.ContentRootPath;

            pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        }
        public static string SaveFile(IFormFile file)
        {
            if (file != null)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
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

        public static FileStream DownloadFile(string fileName)
        {
            var filePath = Path.Combine(pathToSave, fileName);
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
