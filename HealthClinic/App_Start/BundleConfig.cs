using System.Collections.Generic;
using System.Web;
using System.Web.Optimization;

namespace HealthClinic
{
    class NonOrderingBundleOrderer : IBundleOrderer
    {
        public IEnumerable<BundleFile> OrderFiles(BundleContext context, IEnumerable<BundleFile> files)
        {
            return files;
        }
    }
    static class BundleExtentions
    {
        public static Bundle NonOrdering(this Bundle bundle)
        {
            bundle.Orderer = new NonOrderingBundleOrderer();
            return bundle;
        }
    }
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/js").NonOrdering().Include(
                        "~/themes/wp-content/themes/the-ticket-clinic/js/jquery.min.js",
                        "~/themes/wp-content/themes/the-ticket-clinic/js/app.js",
                        "~/themes/wp-content/themes/the-ticket-clinic/js/jquery.cookie.js",
                        "~/themes/wp-content/themes/the-ticket-clinic/js/jquery.cycle2.min.js",
                        "~/themes/wp-content/themes/the-ticket-clinic/js/jquery.cycle2.tile.js",
                        "~/themes/wp-content/themes/the-ticket-clinic/js/jquery.imgliquid.min.js",
                        "~/themes/wp-content/themes/the-ticket-clinic/js/jquery.matchheight.js",
                        "~/themes/wp-content/themes/the-ticket-clinic/js/slick.min.js"
                       // "~/themes/wp-content/plugins/contact-form-7/includes/js/scripts58e0.js?ver=5.1.4",
                       // "~/themes/wp-includes/js/wp-embed.min0606.js?ver=5.2.9",
                       // "~/themes/wp-content/plugins/js_composer/assets/js/dist/js_composer_front.mina752.js?ver=4.11.2.1"
                        ));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            //// Use the development version of Modernizr to develop with and learn from. Then, when you're
            //// ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            //bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
            //          "~/Scripts/bootstrap.js"));

            //bundles.Add(new StyleBundle("~/Content/css").Include(
            //          "~/Content/bootstrap.css",
            //          "~/Content/site.css"));
        }
    }
}
