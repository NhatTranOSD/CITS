using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Text;

namespace RFQ.Common.FileSaving
{
    public static class FileSaving
    {
        private static string folderName = Path.Combine("StaticFiles", "files");
        private static string pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);
        public static string SaveFile(IFormFile file)
        {
            if (file != null)
            {
                var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                fileName = fileName + DateTime.UtcNow.Ticks.ToString();

                var fullPath = Path.Combine(pathToSave, fileName);
                var dbPath = Path.Combine(folderName, fileName); //you can add this path to a list and then return all dbPaths to the client if require

                using (var stream = new FileStream(fullPath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                return dbPath;
            }

            return null;
        }
    }
}
